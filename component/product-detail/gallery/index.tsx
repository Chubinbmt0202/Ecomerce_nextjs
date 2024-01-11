import Image from "next/image";

// khởi tạo kiểu ảnh
type GalleryProductType = {
  images: string[];
};

const Gallery = ({ images }: GalleryProductType) => {
  const featImage = images[0];
  return (
    <section className=" flex w-1/2 justify-between">
      <div className="">
        {images.map((image, index) => (
          <div key={index} className="">
            <Image width={100} height={60} src={image} alt="List Image" />
          </div>
        ))}
      </div>

      <div className="">
        <Image width={500} height={300} src={featImage} alt="Active Image" />
      </div>
    </section>
  );
};

export default Gallery;
