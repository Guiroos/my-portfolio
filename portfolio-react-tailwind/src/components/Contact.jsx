import React from "react";

export default function Contact() {
  return (
    <div name="contact" className="w-full h-screen flex justify-center items-center p-4">
      <form method="POST" action="https://getform.io/f/66f4fc80-c554-49ca-9555-8e712b2a50b0" className="flex flex-col max-w-[900px] w-full">
        <div className="pb-8">
          <p className="text-white text-4xl font-bold border-b-4 border-purple-800">contact</p>
        </div>

        <input className="p-2" type="text" placeholder="Name" name="name" />
        <input className="my-4 p-2" type="email" placeholder="email@email.com" name="name" />
        <textarea className="p-2" name="message" rows="10" placeholder="Message" />
        <button type="submit" className="text-white rounded-md border-2 hover:bg-purple-800 hover:border-purple-800 flex px-4 py-3 my-8 mx-auto items-center">will reply as soon as possible</button>
      </form>
    </div>
  );
}
