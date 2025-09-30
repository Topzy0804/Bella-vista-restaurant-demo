import "./../css/about.css";

const About = () => {
  return (
    <main>
        <section className="about-hero">
            <div className="container">
                <h1>About Bella Vista</h1>
                <p>Discover the story behind our passion for authentic Italian cuisine</p>
            </div>
        </section>

        <section className="story-section">
            <div className="container">
                <div className="story-content">
                    <div className="story-text">
                        <h2>Our Story</h2>
                        <p>Founded in 1985 by the Rossi family, Bella Vista began as a small trattoria with a big dream: to bring the authentic flavors of Italy to our local community. What started as a family recipe collection has grown into a beloved restaurant that serves thousands of satisfied customers each year.</p>
                        <p>Our commitment to quality ingredients, traditional cooking methods, and warm hospitality has remained unchanged throughout our journey. Every dish is prepared with the same care and attention that Nonna Rossi put into her cooking back in Tuscany.</p>
                    </div>
                    <div className="story-image">
                        <img src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg" alt="Restaurant Interior" />
                    </div>
                </div>
            </div>
        </section>

        <section className="values-section">
            <div className="container">
                <h2>Our Values</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">🌱</div>
                        <h3>Fresh & Local</h3>
                        <p>We source our ingredients from local farmers and suppliers, ensuring the freshest flavors in every dish.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">👨‍👩‍👧‍👦</div>
                        <h3>Family Tradition</h3>
                        <p>Our recipes have been passed down through generations, preserving the authentic taste of Italy.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">❤️</div>
                        <h3>Made with Love</h3>
                        <p>Every dish is prepared with care, passion, and attention to detail that you can taste in every bite.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="team-section">
            <div className="container">
                <h2>Meet Our Team</h2>
                <div className="team-grid">
                    <div className="team-member">
                        <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" alt="Chef Marco" />
                        <div className="member-info">
                            <h3>Chef Marco Rossi</h3>
                            <p>Head Chef & Owner</p>
                            <p>With 30 years of culinary experience, Chef Marco brings authentic Italian flavors to every dish.</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" alt="Sous Chef Maria" />
                        <div className="member-info">
                            <h3>Maria Benedetti</h3>
                            <p>Sous Chef</p>
                            <p>Specialized in traditional pasta-making and desserts, Maria ensures every meal is perfect.</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" alt="Manager Giuseppe" />
                        <div className="member-info">
                            <h3>Giuseppe Alberti</h3>
                            <p>Restaurant Manager</p>
                            <p>Giuseppe ensures every guest feels like family with his warm hospitality and attention to detail.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

  )
}

export default About;