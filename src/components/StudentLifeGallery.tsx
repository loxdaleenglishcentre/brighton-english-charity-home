import React from 'react';

const StudentLifeGallery = () => {
  const images = [
    {
      src: "/lovable-uploads/b398d2c7-8b38-4de4-8930-52fd306b74c3.png",
      alt: "Students walking in front of the historic Victorian Loxdale building",
      title: "Historic Learning Environment",
      description: "Study in our beautiful Victorian mansion"
    },
    {
      src: "/lovable-uploads/9b4d67a8-b3a8-499d-9691-e9eaefed908a.png", 
      alt: "Students throwing autumn leaves in the air celebrating",
      title: "Joyful Learning Experience",
      description: "Creating memories while learning English"
    },
    {
      src: "/lovable-uploads/e6a0dc42-93d1-4e10-a753-175ee5aa7f6c.png",
      alt: "Brighton Pride celebration with colorful umbrellas",
      title: "Brighton Community",
      description: "Experience the vibrant culture of Brighton"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Life at Loxdale
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            More than just learning English - it's about experiencing British culture and making lifelong memories
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-white/90">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm border">
            <span className="text-sm text-gray-600">📸 Follow our student adventures</span>
            <span className="text-green-600 font-medium">@LoxdaleEnglish</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentLifeGallery;