export default function Contact() {
    return (
      <section className="py-16 px-4 bg-white max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center text-[#2E3A87] mb-8">
          Contact Us
        </h2>
  
        <form className="space-y-6">
          {/* Full Name and Email - stacked by default, side-by-side only on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E3A87]"
                placeholder="Your full name"
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E3A87]"
                placeholder="you@example.com"
              />
            </div>
          </div>
  
          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E3A87]"
              placeholder="Subject"
            />
          </div>
  
          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E3A87]"
              placeholder="Your message..."
            />
          </div>
  
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-[#2E3A87] text-white py-2 px-6 rounded hover:bg-[#1f2c6b] transition"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    );
  }
  