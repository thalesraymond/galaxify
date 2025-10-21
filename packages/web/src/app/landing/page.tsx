import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background animation placeholder */}
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/galaxify.png')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 opacity-40"></div>
          <div className="absolute inset-0 animate-pulse-slow bg-white opacity-5 blur-3xl"></div>
        </div>
        <div className="relative z-10 p-8 max-w-4xl mx-auto">
          <Image
            src="/galaxify.png"
            alt="Galaxify Logo"
            width={150}
            height={150}
            className="mx-auto mb-8 animate-fade-in"
          />
          <h1 className="text-6xl font-extrabold mb-4 leading-tight animate-slide-up">
            Galaxify Your Habits
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-delay">
            Track habits, conquer dailies, and explore the cosmos.
          </p>
          <Link href="/register" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 animate-bounce-in">
            Start Your Galactic Journey
          </Link>
          <p className="text-sm text-gray-400 mt-4 animate-fade-in-delay-more">
            Sign up with Google or email.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <ScrollAnimationWrapper animationClass="animate-fade-in-scroll">
        <section className="py-20 px-8 bg-gray-900">
          <h2 className="text-5xl font-bold text-center mb-16">
            Features That Propel You Forward
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Feature Card 1 */}
            <ScrollAnimationWrapper animationClass="animate-slide-in-left">
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <h3 className="text-3xl font-semibold mb-4 text-purple-400">Habit Tracking</h3>
                <p className="text-gray-300">
                  Cultivate powerful habits with our intuitive tracking system. Watch your progress soar as you build consistency.
                </p>
              </div>
            </ScrollAnimationWrapper>
            {/* Feature Card 2 */}
            <ScrollAnimationWrapper animationClass="animate-slide-in-up">
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <h3 className="text-3xl font-semibold mb-4 text-blue-400">Dailies & To-Do Lists</h3>
                <p className="text-gray-300">
                  Conquer your daily tasks and manage your to-do lists with a gamified approach. Never miss a beat.
                </p>
              </div>
            </ScrollAnimationWrapper>
            {/* Feature Card 3 */}
            <ScrollAnimationWrapper animationClass="animate-slide-in-right">
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <h3 className="text-3xl font-semibold mb-4 text-green-400">Epic Quests</h3>
                <p className="text-gray-300">
                  Embark on thrilling quests that turn your goals into exciting adventures. Earn rewards and level up!
                </p>
              </div>
            </ScrollAnimationWrapper>
            {/* Feature Card 4 */}
            <ScrollAnimationWrapper animationClass="animate-slide-in-left">
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <h3 className="text-3xl font-semibold mb-4 text-yellow-400">Star System Exploration</h3>
                <p className="text-gray-300">
                  Explore vast star systems as you achieve your goals. Unlock new planets and discover cosmic wonders.
                </p>
              </div>
            </ScrollAnimationWrapper>
            {/* Feature Card 5 */}
            <ScrollAnimationWrapper animationClass="animate-slide-in-up">
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <h3 className="text-3xl font-semibold mb-4 text-red-400">Ship Customization</h3>
                <p className="text-gray-300">
                  Personalize your spaceship with unique upgrades and cosmetics. Show off your style across the galaxy.
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Call to Action Section */}
      <ScrollAnimationWrapper animationClass="animate-fade-in-scroll">
        <section className="py-20 px-8 text-center bg-black">
          <h2 className="text-5xl font-bold mb-8">
            Ready to Launch?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of users transforming their lives, one habit at a time.
          </p>
          <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 animate-bounce-in">
            Sign Up Now
          </Link>
          <p className="text-md text-gray-400 mt-6">
            Secure registration with Google or your preferred email.
          </p>
        </section>
      </ScrollAnimationWrapper>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm bg-gray-950">
        &copy; {new Date().getFullYear()} Galaxify. All rights reserved.
      </footer>
    </div>
  );
}