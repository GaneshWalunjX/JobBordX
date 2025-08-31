import React, { useState, useEffect } from 'react';

export default function JobForm() {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    experience: '',
    skills: '',
    type: '',
    salary: '',
    description: '',
    remote: false
  });

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    fetch('http://localhost:5000/api/jobs')
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error('Failed to fetch jobs:', err));
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:5000/api/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to submit job');
        return res.json();
      })
      .then(() => {
        fetchJobs(); // ✅ Refresh job list after submission
        setFormData({
          title: '',
          company: '',
          location: '',
          experience: '',
          skills: '',
          type: '',
          salary: '',
          description: '',
          remote: false
        });
      })
      .catch(err => {
        console.error(err);
        alert('Failed to submit job. Check console for details.');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Your input fields here, using value={formData.title} etc. */}
        {/* Example: */}
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
        {/* Repeat for other fields */}
        <button type="submit">Submit</button>
      </form>

      <h2>Posted Jobs</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <strong>{job.title}</strong> at {job.company} ({job.location}) — {job.experience}
          </li>
        ))}
      </ul>
    </div>
  );
}
