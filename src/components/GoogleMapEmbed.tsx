// src/components/GoogleMapEmbed.tsx
import React from 'react';

const GoogleMapEmbed: React.FC = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h2>
      <div className="flex justify-center">
        <div
          dangerouslySetInnerHTML={{
            __html: `<iframe 
              src="https://www.google.com/maps/embed?pb=Gc2u985M8vudB7DR8"
              width="100%"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>`,
          }}
          className="w-full md:w-[800px] h-[450px]"
        />
      </div>
    </div>
  );
};

export default GoogleMapEmbed;
