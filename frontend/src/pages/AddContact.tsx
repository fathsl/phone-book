import { useNavigate } from 'react-router-dom';
import { createContact } from '../services/api';

export default function AddContact() {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const contact = {
      first_name: formData.get('first_name') as string,
      last_name: formData.get('last_name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
    };

    try {
      await createContact(contact);
      navigate('/');
    } catch (error) {
      console.error('Error creating contact:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Add New Contact</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">First Name *</label>
          <input
            type="text"
            name="first_name"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            name="last_name"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
}