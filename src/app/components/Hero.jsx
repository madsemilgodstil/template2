'use client';

export default function Hero() {
  return (
    <section className="w-full bg-black text-white py-24">
      <div className="container mx-auto px-8 h-full flex items-center justify-center group">
        <div className="max-w-3xl text-center">
          <p className="text-lg font-light tracking-wide leading-relaxed">
            <span className="inline-block transition-transform group-hover:rotate-45 mr-1">+</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec nunc facilisis tincidunt. 
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
            Praesent dignissim, lectus vitae eleifend ullamcorper, nisi nunc varius nisi, 
            vitae tincidunt nisl nunc nec nunc.
          </p>
        </div>
      </div>
    </section>
  );
}
