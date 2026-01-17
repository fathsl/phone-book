import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Contact } from "../types/contact";
import { deleteContact, getContacts } from "../services/api";
export default function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      const data = await getContacts();
      setContacts(data);
    } catch (error) {
      console.error("Error loading contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        await deleteContact(id);
        setContacts(contacts.filter((contact) => contact.id !== id));
      } catch (error) {
        console.error("Error deleting contact:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Contacts
              </h1>
              <p className="text-slate-600">Manage your contact information</p>
            </div>
            <Link
              to="/add"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm font-medium"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Contact
            </Link>
          </div>
        </div>

        {contacts.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12">
            <div className="text-center">
              <div className="mx-auto w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-12 h-12 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                No contacts yet
              </h3>
              <p className="text-slate-600 mb-6">
                Get started by adding your first contact
              </p>
              <Link
                to="/add"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Add your first contact
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-4">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                      {contact.first_name[0]}
                      {contact.last_name?.[0]}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {contact.first_name} {contact.last_name}
                      </h3>
                      <div className="space-y-1">
                        {contact.email && (
                          <div className="flex items-center text-sm text-slate-600">
                            <svg
                              className="w-4 h-4 mr-2 text-slate-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            {contact.email}
                          </div>
                        )}
                        {contact.phone && (
                          <div className="flex items-center text-sm text-slate-600">
                            <svg
                              className="w-4 h-4 mr-2 text-slate-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                            {contact.phone}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 flex-shrink-0">
                    <Link
                      to={`/edit/${contact.id}`}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <svg
                        className="w-4 h-4 mr-1.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(contact.id)}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <svg
                        className="w-4 h-4 mr-1.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
