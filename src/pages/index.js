import RootLayout from "@/components/Layout/RootLayout"
import Banner from "@/components/UI/Carousel";

function Home() {
  return (
    <div>
      <Banner></Banner>
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
