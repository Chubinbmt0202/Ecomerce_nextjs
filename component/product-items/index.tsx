import Link from 'next/link';
// import { some } from 'lodash';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleFavProduct } from 'store/reducers/user';
// import { RootState } from 'store';
import { ProductTypeList } from '@/types';
import Image from 'next/image';

const ProductItem = ({ discount, images, id, name, price, currentPrice }: ProductTypeList) => {
//   const dispatch = useDispatch();
//   const { favProducts } = useSelector((state: RootState) => state.user);

//   const isFavourite = some(favProducts, productId => productId === id);

//   const toggleFav = () => {
//     dispatch(toggleFavProduct(
//       { 
//         id,
//       }
//     ))
//   }

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
    // <div className="product-item">
    //   <div className="product__image">
    //     <button type="button"><i className="icon-heart"></i></button>

    //     <Link href={`/product/${id}`}>
    //       <a>
    //         <Image  src={images ? images[0] : ''} alt="product" />
    //         {discount && 
    //           <span className="product__discount">{discount}%</span>
    //         }
    //       </a>
    //     </Link>
    //   </div>
      
    //   <div className="product__description">
    //     <h3>{name}</h3>
    //     <div className={"product__price " + (discount ? 'product__price--discount' : '')} >
    //       <h4>${ currentPrice }</h4>

    //       {discount &&  
    //         <span>${ price }</span>
    //       }
    //     </div>
    //   </div>
    // </div>
  )
};


export default ProductItem