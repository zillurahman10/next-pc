import RootLayout from "@/components/Layout/RootLayout"
import Banner from "@/components/UI/Carousel";
import ComponentCard from "@/components/UI/ComponentCard";
import FeaturedCard from "@/components/UI/FeaturedCard";

function Home({ components, featured }) {
  console.log(components);
  return (
    <div>
      {/* Banner section */}
      <Banner></Banner>

      {/* Featured Products Section  */}

      <div className="mt-12">
        <h1 className="text-2xl text-center mt-12">Featured Product</h1>
        <p className="text-center">Checkout our featured products</p>
        <div className="flex justify-center items-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {
              components.data.slice(0, 6).map(product => <ComponentCard key={product?._id} product={product}></ComponentCard>)
            }
          </div>
        </div>
      </div>

      {/* Featured section */}
      <div>
        <h1 className="text-2xl text-center m-12">Featured Catagory</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-[-6px]">
          {
            featured.map(card => <FeaturedCard key={card?._id} info={card}></FeaturedCard>)
          }
        </div>
      </div>
    </div>
  )
}

export default Home;

Home.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/components")
  const featuredResult = await fetch("http://localhost:5000/featured")
  const featured = await featuredResult.json()
  const data = await res.json()
  return {
    props: {
      components: data,
      featured: featured
    }
  }
}
