import Link from 'next/link';
import { ProductTypeList } from '@/types';
import Image from 'next/image';

const ProductItem = ({ discount, images, id, name, price, currentPrice }: ProductTypeList) => {

  return (
    <div className="">
      <Link
        href={`/product/${id}`}
        key={id}
        className="group relative"
      >
        <div className="object-contain aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
          <Image
            width={300}
            height={300}
            src={images ? images[0] : ''}
            alt={""}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 justify-between">
          <div>
            <h3 className="text-sm text-gray-900 overflow-hidden whitespace-nowrap overflow-ellipsis">
              <span
                aria-hidden="true"
                className="absolute inset-0"
              />
              {name}
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">
            {price} $
          </p>
        </div>
      </Link>
  </div>
  )
};


export default ProductItem