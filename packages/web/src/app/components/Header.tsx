interface HeaderProps {
    button: 'login' | 'register';
}

const Header = ({ button }: HeaderProps) => {
    const buttonText = button === 'login' ? 'Login' : 'Register';
    const buttonLink = button === 'login' ? '/login' : '/register';

    return (
        <header className="container mx-auto px-6 py-4">
            <nav className="flex items-center justify-between">
                <div className="text-2xl font-bold font-orbitron text-white">GALAXIFY</div>
                <a
                    href={buttonLink}
                    className="hidden md:inline-block bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-6 py-2 rounded-md hover:bg-cyan-500/40 transition-colors"
                >
                    {buttonText}
                </a>
            </nav>
        </header>
    );
};

export default Header;
