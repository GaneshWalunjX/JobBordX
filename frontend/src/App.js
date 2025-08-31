import JobForm from './components/JobForm';
import JobList from './components/JobList';

function App() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Job Board</h1>
      <JobForm />
      <JobList />
    </div>
  );
}

export default App;
