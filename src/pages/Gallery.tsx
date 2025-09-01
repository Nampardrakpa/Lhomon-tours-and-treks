// import { useState } from 'react';
// import { Download } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
// import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer';

// interface GalleryImage {
//   id: string;
//   src: string;
//   title: string;
//   location: string;
//   description: string;
// }

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

//   // Sample gallery data
//   const galleryImages: GalleryImage[] = [
//     {
//       id: '1',
//       src: '/src/assets/buddha-dordenma.jpg',
//       title: 'Buddha Dordenma',
//       location: 'Thimphu, Bhutan',
//       description:
//         'A massive golden Buddha statue overlooking Thimphu Valley, one of the largest of its kind in the world.',
//     },
//     {
//       id: '2',
//       src: '/src/assets/changgangkha.jpg',
//       title: 'Changangkha Lhakhang',
//       location: 'Thimphu, Bhutan',
//       description:
//         'An ancient fortress-like temple and monastic school built in the 12th century, perched on a ridge above Thimphu.',
//     },
//     {
//       id: '3',
//       src: '/src/assets/chelela.jpg',
//       title: 'Chele La Pass',
//       location: 'Between Paro & Haa, Bhutan',
//       description:
//         'One of the highest motorable passes in Bhutan, offering panoramic views of Mount Jomolhari and the Haa Valley.',
//     },
//     {
//       id: '4',
//       src: '/src/assets/ChimiLhakhang.jpg',
//       title: 'Chimi Lhakhang',
//       location: 'Punakha, Bhutan',
//       description:
//         'Also known as the Fertility Temple, this monastery is dedicated to Lama Drukpa Kunley, the “Divine Madman.”',
//     },
//     {
//       id: '5',
//       src: '/src/assets/chomolhari.jpg',
//       title: 'Mount Jomolhari',
//       location: 'Northwestern Bhutan',
//       description:
//         'Known as the “Bride of Kangchenjunga,” this sacred mountain stands at 7,326 meters on the Bhutan–Tibet border.',
//     },
//     {
//       id: '6',
//       src: '/src/assets/clocktower.jpg',
//       title: 'Clock Tower Square',
//       location: 'Thimphu, Bhutan',
//       description:
//         'A popular landmark and gathering place in central Thimphu, surrounded by shops, restaurants, and cultural events.',
//     },
//     {
//       id: '7',
//       src: '/src/assets/dagalalake.jpg',
//       title: 'Dagala Thousand Lakes',
//       location: 'Thimphu Region, Bhutan',
//       description:
//         'A famous trekking destination known for its pristine alpine lakes and breathtaking Himalayan views.',
//     },
//     {
//       id: '8',
//       src: '/src/assets/dochulapass.jpg',
//       title: 'Dochula Pass',
//       location: 'On the way to Punakha, Bhutan',
//       description:
//         'A high mountain pass with 108 memorial chortens and stunning views of the eastern Himalayas on clear days.',
//     },
//     {
//       id: '9',
//       src: '/src/assets/DrukgyelDzong.jpg',
//       title: 'Drukgyel Dzong',
//       location: 'Paro, Bhutan',
//       description:
//         'A historic fortress built in 1649 to commemorate Bhutan’s victory over Tibetan invaders, now a picturesque ruin.',
//     },
//     {
//       id: '10',
//       src: '/src/assets/DrukPath.jpg',
//       title: 'Druk Path Trek',
//       location: 'Paro to Thimphu, Bhutan',
//       description:
//         'One of Bhutan’s most popular treks, connecting Paro and Thimphu through lakes, ridges, and monasteries.',
//     },
//     {
//       id: '11',
//       src: '/src/assets/ganteymonastery.jpg',
//       title: 'Gangtey Monastery',
//       location: 'Phobjikha Valley, Bhutan',
//       description:
//         'A 17th-century monastery overlooking the Phobjikha Valley, winter home of the endangered black-necked cranes.',
//     },
//     {
//       id: '12',
//       src: '/src/assets/KurjeLhakhang.jpg',
//       title: 'Kurjey Lhakhang',
//       location: 'Bumthang, Bhutan',
//       description:
//         'A sacred monastery complex where Guru Rinpoche left his body imprint on a rock cave wall.',
//     },
//     {
//       id: '13',
//       src: '/src/assets/paromuseum.jpg',
//       title: 'National Museum of Bhutan',
//       location: 'Paro, Bhutan',
//       description:
//         'Housed in the Ta Dzong watchtower, this museum showcases Bhutanese art, artifacts, and cultural treasures.',
//     },
//     {
//       id: '14',
//       src: '/src/assets/parorinpungdzong.jpg',
//       title: 'Paro Rinpung Dzong',
//       location: 'Paro, Bhutan',
//       description:
//         'A majestic fortress-monastery overlooking Paro Valley, famous for its massive buttressed walls and annual festival.',
//     },
//     {
//       id: '15',
//       src: '/src/assets/punakhadzong.jpg',
//       title: 'Punakha Dzong',
//       location: 'Punakha, Bhutan',
//       description:
//         'The “Palace of Great Happiness,” built at the confluence of the Pho Chhu and Mo Chhu rivers, is one of Bhutan’s most beautiful dzongs.',
//     },
//     {
//       id: '16',
//       src: '/src/assets/simtokhadzong.jpg',
//       title: 'Simtokha Dzong',
//       location: 'Thimphu, Bhutan',
//       description:
//         'The oldest dzong in Bhutan, built in 1629, now houses a school for the study of traditional Buddhist texts.',
//     },
//     {
//       id: '17',
//       src: '/src/assets/SoiKaktsaTrek.jpg',
//       title: 'Soi Yaktsa Trek',
//       location: 'Paro Region, Bhutan',
//       description:
//         'A scenic trek offering views of Mount Jomolhari, yak herder camps, and alpine meadows.',
//     },
//     {
//       id: '18',
//       src: '/src/assets/takinpark.jpg',
//       title: 'Motithang Takin Preserve',
//       location: 'Thimphu, Bhutan',
//       description:
//         'A wildlife preserve for Bhutan’s national animal, the takin, a unique goat-antelope found only in the Himalayas.',
//     },
//     {
//       id: '19',
//       src: '/src/assets/taktsang.jpg',
//       title: 'Tiger’s Nest Monastery (Taktsang)',
//       location: 'Paro, Bhutan',
//       description:
//         'The iconic cliffside monastery perched dramatically 900 meters above Paro Valley, Bhutan’s most famous landmark.',
//     },
//     {
//       id: '20',
//       src: '/src/assets/tashichho_dzong.jpg',
//       title: 'Tashichho Dzong',
//       location: 'Thimphu, Bhutan',
//       description:
//         'A grand fortress-monastery that houses Bhutan’s government offices and the throne room of His Majesty the King.',
//     },
//   ];


//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       {/* Header */}
//       <section className="py-16 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Bhutan Gallery</h1>
//           <p className="text-xl text-primary-foreground/90">
//             Discover the beauty of Bhutan through our curated collection of photographs
//           </p>
//         </div>
//       </section>

//       {/* Grid Gallery */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {galleryImages.map((image) => (
//             <div
//               key={image.id}
//               className="relative cursor-pointer rounded-lg overflow-hidden shadow-md group"
//               onClick={() => setSelectedImage(image)}
//             >
//               <img
//                 src={image.src}
//                 alt={image.title}
//                 className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4 text-black">
//                 <h3 className="text-sm font-semibold">{image.title}</h3>
//                 <p className="text-xs">{image.location}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Lightbox Modal */}
//       <Dialog
//         open={selectedImage !== null}
//         onOpenChange={(open) => {
//           if (!open) setSelectedImage(null);
//         }}
//       >
//         <DialogContent className="max-w-4xl w-full p-0 bg-white/90 rounded-lg overflow-hidden text-black">
//           {selectedImage && (
//             <div className="flex flex-col md:flex-row">
//               <div className="md:w-2/3 p-4 flex items-center justify-center">
//                 <img
//                   src={selectedImage.src}
//                   alt={selectedImage.title}
//                   className="max-h-[80vh] w-full object-contain rounded-lg"
//                 />
//               </div>

//               <div className="md:w-1/3 p-6 text-white flex flex-col justify-between text-black">
//                 <div>
//                   <h2 className="text-2xl font-bold mb-4">{selectedImage.title}</h2>
//                   <p className="mb-4 text-black">
//                     <span className="font-semibold text-black">Location:</span> {selectedImage.location}
//                   </p>
//                   <p className="mb-4 text-black">
//                     <span className="font-semibold text-black">Description:</span> {selectedImage.description}
//                   </p>
//                   <div className="mb-4 text-black">
//                     <h4 className="font-semibold mb-2 text-black">Tags</h4>
//                     <div className="flex flex-wrap gap-2">
//                       <span className="bg-primary px-2 py-1 rounded text-xs text-white">Bhutan</span>
//                       <span className="bg-primary px-2 py-1 rounded text-xs text-white">Travel</span>
//                       <span className="bg-primary px-2 py-1 rounded text-xs text-white">Photography</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>

//       <Footer />
//     </div>
//   );
// };

// export default Gallery;
import { useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  location: string;
  description: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Sample gallery data
  const galleryImages: GalleryImage[] = [
    {
      id: '1',
      src: new URL('../assets/buddha-dordenma.jpg', import.meta.url).href,
      title: 'Buddha Dordenma',
      location: 'Thimphu, Bhutan',
      description:
        'A massive golden Buddha statue overlooking Thimphu Valley, one of the largest of its kind in the world.',
    },
    {
      id: '2',
      src: new URL('../assets/changgangkha.jpg', import.meta.url).href,
      title: 'Changangkha Lhakhang',
      location: 'Thimphu, Bhutan',
      description:
        'An ancient fortress-like temple and monastic school built in the 12th century, perched on a ridge above Thimphu.',
    },
    {
      id: '3',
      src: new URL('../assets/chelela.jpg', import.meta.url).href,
      title: 'Chele La Pass',
      location: 'Between Paro & Haa, Bhutan',
      description:
        'One of the highest motorable passes in Bhutan, offering panoramic views of Mount Jomolhari and the Haa Valley.',
    },
    {
      id: '4',
      src: new URL('../assets/ChimiLhakhang.jpg', import.meta.url).href,
      title: 'Chimi Lhakhang',
      location: 'Punakha, Bhutan',
      description:
        'Also known as the Fertility Temple, this monastery is dedicated to Lama Drukpa Kunley, the “Divine Madman.”',
    },
    {
      id: '5',
      src: new URL('../assets/chomolhari.jpg', import.meta.url).href,
      title: 'Mount Jomolhari',
      location: 'Northwestern Bhutan',
      description:
        'Known as the “Bride of Kangchenjunga,” this sacred mountain stands at 7,326 meters on the Bhutan–Tibet border.',
    },
    {
      id: '6',
      src: new URL('../assets/clocktower.jpg', import.meta.url).href,
      title: 'Clock Tower Square',
      location: 'Thimphu, Bhutan',
      description:
        'A popular landmark and gathering place in central Thimphu, surrounded by shops, restaurants, and cultural events.',
    },
    {
      id: '7',
      src: new URL('../assets/dagalalake.jpg', import.meta.url).href,
      title: 'Dagala Thousand Lakes',
      location: 'Thimphu Region, Bhutan',
      description:
        'A famous trekking destination known for its pristine alpine lakes and breathtaking Himalayan views.',
    },
    {
      id: '8',
      src: new URL('../assets/dochulapass.jpg', import.meta.url).href,
      title: 'Dochula Pass',
      location: 'On the way to Punakha, Bhutan',
      description:
        'A high mountain pass with 108 memorial chortens and stunning views of the eastern Himalayas on clear days.',
    },
    {
      id: '9',
      src: new URL('../assets/DrukgyelDzong.jpg', import.meta.url).href,
      title: 'Drukgyel Dzong',
      location: 'Paro, Bhutan',
      description:
        'A historic fortress built in 1649 to commemorate Bhutan’s victory over Tibetan invaders, now a picturesque ruin.',
    },
    {
      id: '10',
      src: new URL('../assets/DrukPath.jpg', import.meta.url).href,
      title: 'Druk Path Trek',
      location: 'Paro to Thimphu, Bhutan',
      description:
        'One of Bhutan’s most popular treks, connecting Paro and Thimphu through lakes, ridges, and monasteries.',
    },
    {
      id: '11',
      src: new URL('../assets/ganteymonastery.jpg', import.meta.url).href,
      title: 'Gangtey Monastery',
      location: 'Phobjikha Valley, Bhutan',
      description:
        'A 17th-century monastery overlooking the Phobjikha Valley, winter home of the endangered black-necked cranes.',
    },
    {
      id: '12',
      src: new URL('../assets/KurjeLhakhang.jpg', import.meta.url).href,
      title: 'Kurjey Lhakhang',
      location: 'Bumthang, Bhutan',
      description:
        'A sacred monastery complex where Guru Rinpoche left his body imprint on a rock cave wall.',
    },
    {
      id: '13',
      src: new URL('../assets/paromuseum.jpg', import.meta.url).href,
      title: 'National Museum of Bhutan',
      location: 'Paro, Bhutan',
      description:
        'Housed in the Ta Dzong watchtower, this museum showcases Bhutanese art, artifacts, and cultural treasures.',
    },
    {
      id: '14',
      src: new URL('../assets/parorinpungdzong.jpg', import.meta.url).href,
      title: 'Paro Rinpung Dzong',
      location: 'Paro, Bhutan',
      description:
        'A majestic fortress-monastery overlooking Paro Valley, famous for its massive buttressed walls and annual festival.',
    },
    {
      id: '15',
      src: new URL('../assets/punakhadzong.jpg', import.meta.url).href,
      title: 'Punakha Dzong',
      location: 'Punakha, Bhutan',
      description:
        'The “Palace of Great Happiness,” built at the confluence of the Pho Chhu and Mo Chhu rivers, is one of Bhutan’s most beautiful dzongs.',
    },
    {
      id: '16',
      src: new URL('../assets/simtokhadzong.jpg', import.meta.url).href,
      title: 'Simtokha Dzong',
      location: 'Thimphu, Bhutan',
      description:
        'The oldest dzong in Bhutan, built in 1629, now houses a school for the study of traditional Buddhist texts.',
    },
    {
      id: '17',
      src: new URL('../assets/SoiKaktsaTrek.jpg', import.meta.url).href,
      title: 'Soi Yaktsa Trek',
      location: 'Paro Region, Bhutan',
      description:
        'A scenic trek offering views of Mount Jomolhari, yak herder camps, and alpine meadows.',
    },
    {
      id: '18',
      src: new URL('../assets/takinpark.jpg', import.meta.url).href,
      title: 'Motithang Takin Preserve',
      location: 'Thimphu, Bhutan',
      description:
        'A wildlife preserve for Bhutan’s national animal, the takin, a unique goat-antelope found only in the Himalayas.',
    },
    {
      id: '19',
      src: new URL('../assets/taktsang.jpg', import.meta.url).href,
      title: 'Tiger’s Nest Monastery (Taktsang)',
      location: 'Paro, Bhutan',
      description:
        'The iconic cliffside monastery perched dramatically 900 meters above Paro Valley, Bhutan’s most famous landmark.',
    },
    {
      id: '20',
      src: new URL('../assets/tashichho_dzong.jpg', import.meta.url).href,
      title: 'Tashichho Dzong',
      location: 'Thimphu, Bhutan',
      description:
        'A grand fortress-monastery that houses Bhutan’s government offices and the throne room of His Majesty the King.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bhutan Gallery</h1>
          <p className="text-xl text-primary-foreground/90">
            Discover the beauty of Bhutan through our curated collection of photographs
          </p>
        </div>
      </section>

      {/* Grid Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative cursor-pointer rounded-lg overflow-hidden shadow-md group"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4 text-black">
                <h3 className="text-sm font-semibold">{image.title}</h3>
                <p className="text-xs">{image.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog
        open={selectedImage !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedImage(null);
        }}
      >
        <DialogContent className="max-w-4xl w-full p-0 bg-white/90 rounded-lg overflow-hidden text-black">
          {selectedImage && (
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 p-4 flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[80vh] w-full object-contain rounded-lg"
                />
              </div>

              <div className="md:w-1/3 p-6 text-white flex flex-col justify-between text-black">
                <div>
                  <h2 className="text-2xl font-bold mb-4">{selectedImage.title}</h2>
                  <p className="mb-4 text-black">
                    <span className="font-semibold text-black">Location:</span> {selectedImage.location}
                  </p>
                  <p className="mb-4 text-black">
                    <span className="font-semibold text-black">Description:</span> {selectedImage.description}
                  </p>
                  <div className="mb-4 text-black">
                    <h4 className="font-semibold mb-2 text-black">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-primary px-2 py-1 rounded text-xs text-white">Bhutan</span>
                      <span className="bg-primary px-2 py-1 rounded text-xs text-white">Travel</span>
                      <span className="bg-primary px-2 py-1 rounded text-xs text-white">Photography</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;

