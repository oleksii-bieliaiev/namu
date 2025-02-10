import { motion } from "framer-motion";
import React, { useState } from "react";

interface TicketsProps {
  onClose: () => void;
}

const Tickets: React.FC<TicketsProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    tickets: 1,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setIsSubmitted(true); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#2f2f2f] bg-opacity-65 z-50">
      <motion.aside
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-[#FFFFFF] lg:w-[700px] lg:h-[500px] max-sm:w-[280px] shadow-lg relative flex flex-col justify-center items-center px-10 py-8"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-black text-lg">
          ✖
        </button>

        {isSubmitted ? (
          
          <div className="text-center">
            <h2 className="text-black text-2xl font-semibold mb-4 font-flexsans">Reservation Successful</h2>
            <p className="text-gray-600 font-flexsans">Your museum ticket has been reserved successfully.</p>
          </div>
        ) : (
          
          <>
            <h2 className="text-black text-2xl font-semibold mb-6 font-flexsans">Museum Ticket Purchase</h2>
            <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 font-flexsans px-4 py-2 w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 font-flexsans px-4 py-2 w-full"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="border border-gray-300 px-4 font-flexsans py-2 w-full"
              />
              <select
                name="tickets"
                value={formData.tickets}
                onChange={handleChange}
                required
                className="border border-gray-300 px-4 font-flexsans py-2 w-full"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} Ticket{num > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="bg-[#1A5A4C] text-white px-6 font-flexsans py-2 mt-4 hover:bg-[#154a3e] transition-all"
              >
                Book Tickets
              </button>
            </form>
          </>
        )}
      </motion.aside>
    </div>
  );
};

export default Tickets;
