import useSWR from "swr";
import { ProductTypeList } from "@/types";
import ProductItem from "@/component/product-items";

const ListHoodies = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json())
    const {data, error} = useSWR('api/hoodies', fetcher)

    return (
<>
      {!data && 
        <h1>Loading...</h1>
      }

      {data &&
        <section className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((item: ProductTypeList)  => (
            <ProductItem 
              id={item.id} 
              name={item.name}
              price={item.price}
              color={item.color}
              currentPrice={item.currentPrice}
              key={item.id}
              images={item.images} 
            />
          ))}
        </section>
      }
    </>
    )
}

export default ListHoodies