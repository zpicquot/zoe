import { Article, Category } from './types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: "IF YOU WANT TO KNOW, YOU'RE IN THE RIGHT PLACE.",
    subtitle: '',
    category: 'Conceptual',
    author: 'Editorial Team',
    date: 'Your Fashion Journalist',
    imageUrl: '/image/vintage-shooting.jpg',
    featured: true,
    quote: "Sustainability is no longer a choice; it is the only viable architecture for the future of luxury.",
    content: `
      <p class="dropcap">T</p>he future of fashion isn't being decided on the runway; it's being engineered in the lab. As the industry faces unprecedented pressure to reduce its environmental footprint, a new wave of "Eco-Futurists" is emerging. These designers and scientists are moving beyond simple recycling and towards a radical reimagining of what luxury materials can be.

      <p>From lab-grown leather made from mycelium to silk produced by genetically modified yeast, the possibilities are endless. These materials aren't just sustainable; they offer properties that natural fibers can't match. Imagine a coat that can self-repair or a dress that changes color based on the wearer's body temperature. This is the intersection of biology and beauty.</p>

      <figure>
        <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200" alt="Bio-engineered fabric" />
        <figcaption>The microscopic beauty of lab-grown luxury.</figcaption>
      </figure>

      <h3>Beyond the Greenwash</h3>
      <p>For too long, sustainability has been used as a marketing buzzword. But the new generation of designers is demanding transparency and systemic change. They are building circular business models where every garment is designed to be disassembled and reborn. The goal is a closed-loop system where waste is a design flaw, not an inevitability.</p>
    `
  },
  {
    id: '2',
    title: 'THAT IT-GIRL',
    subtitle: 'The Modern Myth of an Effortless Icon',
    category: 'Opinions',
    author: 'Zoé Picquot',
    date: 'Your Fashion Journalist',
    imageUrl: '/image/logoarticle.jpg',
    content: `
      <p class="dropcap">I</p>n today’s digital age, one phrase keeps resurfacing: “that it-girl.” Mysterious yet everywhere, she represents an ideal that’s hard to define but instantly recognizable. She isn’t just beautiful, nor simply popular. She embodies something more subtle, almost intangible: an energy, a presence, a way of existing that naturally draws attention.

      <h3>It’s All About the Aura</h3>
      <p>Being that it-girl isn’t about following trends it’s about setting them, or sometimes ignoring them entirely. She moves through life on her own terms, guided by her instincts rather than external expectations. Her style might be minimalist or bold, but it always feels authentic.</p>
      <p>What truly sets her apart is her aura. She walks into a room without trying, yet everything shifts. It’s not about perfection it’s about confidence. She knows who she is, and she owns it unapologetically.</p>

      <h3>Confidence Over Perfection</h3>
      <p>Contrary to popular belief, that it-girl isn’t flawless. She has bad days, insecurities, and moments of doubt. The difference is that she doesn’t let those define her. She embraces her imperfections and turns them into part of her identity.</p>
      <p>She’s comfortable in her own skin, and that comfort becomes magnetic. People aren’t drawn to her because she’s perfect they’re drawn to her because she’s real.</p>

      <h3>A Lifestyle, Not a Label</h3>
      <p>Being that it-girl isn’t something you can buy or replicate. It’s not about wearing the right brands, going to the right places, or having the perfect routine. It’s about how you carry yourself, how you treat others, and how you show up in your own life.</p>
      <p>She invests in herself mentally, emotionally, and sometimes physically not to impress others, but because she values her own growth.</p>

      <h3>The Power of Subtlety</h3>
      <p>She doesn’t need to be the loudest person in the room to be noticed. There’s power in her subtlety. Whether it’s a quiet confidence, a thoughtful comment, or a simple but striking outfit, she leaves an impression without forcing it.</p>

      <h3>Can Anyone Be “That It-Girl”?</h3>
      <p>The truth is, yes but not by imitation. The moment you try too hard to fit into the mold, you lose what makes it powerful. That it-girl isn’t a fixed identity it’s a mindset.</p>
      <p>It’s about becoming the most authentic version of yourself, embracing your individuality, and moving through the world with quiet confidence.</p>
      <p>Because in the end, that it-girl isn’t someone else.</p>
    `
  },
  {
    id: '3',
    title: 'THE COLORS OF THE YEAR',
    subtitle: 'A Reflection of Mood, Culture, and Change',
    category: 'Conceptual',
    author: 'Zoé Picquot',
    date: 'Your Fashion Journalist',
    imageUrl: '/image/colors-of-the-year.jpg',
    content: `
      <p class="dropcap">E</p>very year, colors take center stage in shaping trends across fashion, design, and lifestyle. More than just aesthetic choices, the colors of the year reflect the collective mood of society—our desires, our uncertainties, and the direction we’re heading. They tell a story without words, influencing everything from the clothes we wear to the spaces we live in.

      <h3>A Mirror of the Times</h3>
      <p>Color trends don’t appear randomly. They emerge from cultural shifts, global events, and evolving mindsets. In times of uncertainty, softer and calming tones often dominate. When optimism rises, bold and vibrant shades take over. The palette of the year becomes a visual language, expressing what people feel—even when they can’t articulate it.</p>

      <h3>The Key Shades Defining the Year</h3>
      <p>This year’s palette is all about balance—a mix of grounding neutrals and expressive hues:</p>
      
      <p><strong>Soft Earth Tones</strong><br/>
      Warm beiges, clay browns, and muted terracottas are making a strong return. These shades bring a sense of stability and connection to nature, creating a comforting foundation in both fashion and interiors.</p>
      
      <p><strong>Digital Pastels</strong><br/>
      Think lavender, powder blue, and pale mint. These futuristic yet gentle tones reflect our increasingly digital lives while maintaining a sense of calm and lightness.</p>
      
      <p><strong>Bold Accents</strong><br/>
      Electric blue, vibrant red, and sunny yellow are used sparingly but intentionally. These colors inject energy and optimism, acting as statement elements in otherwise understated looks.</p>
      
      <p><strong>Deep Greens</strong><br/>
      From forest to olive, green continues to symbolize renewal and growth. It’s a versatile color that bridges the gap between boldness and serenity.</p>

      <h3>How Colors Influence Our Daily Lives</h3>
      <p>Colors have a psychological impact. They affect our mood, our productivity, and even our confidence. Wearing certain shades can make you feel more powerful, while others can bring a sense of peace. In interior design, color choices can transform a space entirely—making it feel larger, cozier, brighter, or more intimate.</p>
      <p>This is why the colors of the year matter. They subtly guide our choices, often without us realizing it.</p>

      <h3>From Runways to Real Life</h3>
      <p>While these colors may debut on runways or in design studios, they quickly make their way into everyday life. You’ll see them in clothing collections, home decor, branding, and even social media aesthetics.</p>
      <p>The key isn’t to adopt every trend, but to find the shades that resonate with you. A single accessory, a statement wall, or a pop of color in your outfit can be enough to embrace the spirit of the year.</p>

      <h3>Beyond Trends</h3>
      <p>At their core, the colors of the year are about expression. They invite experimentation, creativity, and personal interpretation. Trends may guide us, but they don’t define us.</p>
      <p>Because ultimately, the most important color choice you can make… is the one that feels like you.</p>
    `
  },
  {
    id: '4',
    title: 'HOW TO LIVE LIKE A FASHION ENTHUSIAST',
    subtitle: ' Style as a Reflection of Who You Are',
    category: 'Trends',
    author: 'Zoé Picquot',
    date: 'Your Fashion Journalist',
    imageUrl: '/image/fashion-enthusiast.jpg',
    content: `
      <p class="dropcap">L</p>iving like a fashion enthusiast isn’t about owning a closet full of designer pieces or constantly chasing the latest trends. It’s a mindset—a way of seeing the world through creativity, detail, and self-expression. Fashion becomes more than clothing; it becomes a language, a daily ritual, and a form of identity.

      <h3>Develop Your Eye</h3>
      <p>A true fashion enthusiast pays attention. It starts with observation—how people style pieces, how colors interact, how silhouettes shape perception. Inspiration can come from anywhere: the street, films, vintage photos, or even architecture.</p>
      <p>Train your eye to notice details. The way a blazer fits, how accessories elevate a look, or how a simple outfit can feel powerful with the right attitude. Over time, you begin to understand what works—and more importantly, what works for you.</p>

      <h3>Build a Personal Style</h3>
      <p>Trends come and go, but personal style lasts. Living like a fashion enthusiast means curating a wardrobe that reflects who you are, not just what’s popular.</p>
      <p>Experiment with different aesthetics—minimalist, edgy, classic, eclectic—until something feels authentic. Don’t be afraid to mix influences. The goal isn’t perfection; it’s consistency in how you express yourself.</p>

      <h3>Quality Over Quantity</h3>
      <p>You don’t need hundreds of pieces to dress well. A thoughtful wardrobe built around versatile, well-made items will always feel more elevated than an overflowing closet of fast trends.</p>
      <p>Invest in essentials that you love and can wear repeatedly. When every piece has a purpose, getting dressed becomes easier—and more enjoyable.</p>

      <h3>Make It a Daily Ritual</h3>
      <p>Fashion enthusiasts don’t just “throw something on.” They engage with their wardrobe daily. Choosing an outfit becomes a creative act, even on ordinary days.</p>
      <p>Take a moment each morning to think about how you want to feel. Confident? Relaxed? Bold? Let that intention guide your outfit. Fashion becomes a tool to shape your mindset.</p>

      <h3>Stay Curious, Not Obsessed</h3>
      <p>It’s easy to get caught up in constantly consuming trends, but true enthusiasts stay curious rather than pressured. Follow designers, explore new brands, revisit past eras—but don’t feel the need to adopt everything you see.</p>
      <p>Fashion should inspire, not overwhelm.</p>

      <h3>Confidence Is the Core</h3>
      <p>The most important element of any outfit isn’t the clothing—it’s the person wearing it. Confidence transforms even the simplest look into something memorable.</p>
      <p>Wear your choices with intention. When you feel good in what you’re wearing, it shows.</p>

      <h3>Express, Don’t Impress</h3>
      <p>At its best, fashion isn’t about impressing others—it’s about expressing yourself. Living like a fashion enthusiast means dressing for your own satisfaction first.</p>
      <p>Some days will be bold, others minimal. Some outfits will work perfectly, others won’t. That’s part of the process.</p>
      <p>Because in the end, fashion isn’t about getting it right every time—it’s about enjoying the evolution of your own style.</p>
    `
  }
];

export const CATEGORIES: Category[] = [
  { 
    name: 'Trends', 
    slug: 'trends',
    subcategories: [
      { name: 'Quiet Luxury 2.0', slug: 'quiet-luxury' },
      { name: 'Bold Maximalism', slug: 'bold-maximalism' },
      { name: 'Boho Revival', slug: 'boho-revival' },
      { name: 'Tailoring Power', slug: 'tailoring-power' },
      { name: 'Statement Accessories Era', slug: 'statement-accessories' }
    ]
  },
  { 
    name: 'Designers', 
    slug: 'designers',
    subcategories: [
      { name: 'Emerging Designers', slug: 'emerging-designers' },
      { name: 'Luxury Fashion Houses', slug: 'luxury-fashion-houses' },
      { name: 'Avant-Garde Visionaries', slug: 'avant-garde-visionaries' },
      { name: 'Minimalist Designers', slug: 'minimalist-designers' },
      { name: 'Streetwear Icons', slug: 'streetwear-icons' }
    ]
  },
  { 
    name: 'Opinions', 
    slug: 'opinions',
    subcategories: [
      { name: 'Trend Verdicts', slug: 'trend-verdicts' },
      { name: 'Runway Reactions', slug: 'runway-reactions' },
      { name: 'Style Debates', slug: 'style-debates' },
      { name: 'Fashion Culture Talk', slug: 'fashion-culture-talk' },
      { name: 'Hot Takes', slug: 'hot-takes' }
    ]
  },
];
