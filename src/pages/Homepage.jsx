import FormSection from '../components/Homepage/FormSection'
import HeroSection from '../components/Homepage/HeroSection'
import NewProducts from '../components/Homepage/NewProducts'

const Homepage = () => {
    return (
        <main className='w-full'>
            <HeroSection />
            <NewProducts />
            <FormSection />
        </main>
    )
}

export default Homepage