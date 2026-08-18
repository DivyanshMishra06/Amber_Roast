export const MENU_TABS = [
  { id: 'espresso', label: 'Espresso Bar' },
  { id: 'food',     label: 'Bites & Pastries' },
  { id: 'cold',     label: 'Cold Drinks' },
  { id: 'specials', label: 'Specials' },
]

export const MENU_ITEMS = {
  espresso: [
    { icon: '☕', name: 'Amber Espresso',   price: '$3.50', desc: 'Our house double-shot with notes of dark chocolate, caramel, and a hint of citrus.' },
    { icon: '🥛', name: 'Velvet Latte',     price: '$5.25', desc: 'Silky steamed whole milk over a double ristretto pull. Topped with micro-foam art.' },
    { icon: '🍫', name: 'Dark Mocha',       price: '$5.75', desc: 'Bittersweet Valrhona cocoa blended with our espresso. Rich, smooth, unforgettable.' },
    { icon: '🌸', name: 'Rose Cortado',     price: '$5.00', desc: 'Equal parts espresso and warm rose-infused oat milk. Floral and refined.' },
    { icon: '🍦', name: 'Affogato',         price: '$6.50', desc: 'A hot espresso poured over a scoop of vanilla bean gelato. Pure indulgence.' },
    { icon: '🌿', name: 'Matcha Latte',     price: '$5.50', desc: 'Ceremonial-grade matcha whisked smooth with steamed oat milk. Earthy and calming.' },
  ],
  food: [
    { icon: '🥐', name: 'Butter Croissant',    price: '$4.00',  desc: 'Laminated dough, 48-hour cold ferment. Shatteringly flaky, buttery through and through.' },
    { icon: '🫐', name: 'Blueberry Scone',      price: '$3.75',  desc: 'Packed with wild blueberries, finished with a lemon-vanilla glaze.' },
    { icon: '🧇', name: 'Avocado Toast',        price: '$9.50',  desc: 'Sourdough, smashed avo, everything bagel seasoning, and a soft-poached egg.' },
    { icon: '🍞', name: 'Breakfast Sandwich',   price: '$11.00', desc: 'Brioche bun, cage-free egg, aged cheddar, maple-glazed bacon, herb aioli.' },
    { icon: '🍰', name: 'Cardamom Cake',        price: '$5.25',  desc: 'House-baked daily. Warm spice, cream cheese frosting, toasted almond top.' },
    { icon: '🥗', name: 'Grain Bowl',           price: '$13.00', desc: 'Farro, roasted seasonal veg, tahini dressing, and a seven-minute egg.' },
  ],
  cold: [
    { icon: '🧊', name: 'Cold Brew',            price: '$5.00', desc: '18-hour steep, served over obsidian ice. Smooth, low-acid, dangerously drinkable.' },
    { icon: '🥤', name: 'Nitro Latte',          price: '$6.00', desc: 'Cold brew infused with nitrogen for a cascading, creamy, foam-free finish.' },
    { icon: '🍊', name: 'Iced Citrus Espresso', price: '$5.75', desc: 'Double shot poured over fresh-squeezed OJ and sparkling water. Bright and energizing.' },
    { icon: '🍵', name: 'Hibiscus Iced Tea',    price: '$4.50', desc: 'House-brewed hibiscus and rose-hip tea over ice. Caffeine-free and refreshing.' },
  ],
  specials: [
    { icon: '✨', name: 'Amber Gold Latte',   price: '$6.50', badge: "Chef's Pick", featured: true, desc: 'Signature drink — turmeric, cinnamon, and a dash of black pepper blended with espresso and oat milk.' },
    { icon: '🍁', name: 'Brown Butter Latte', price: '$6.25', badge: 'Seasonal',    featured: true, desc: 'Nutty brown butter syrup, espresso, whole milk, and a pinch of fleur de sel. Fall in a cup.' },
  ],
}

export const GALLERY_ITEMS = [
  { cls: 'gallery-img-1', large: true, label: 'Our hand-built espresso bar' },
  { cls: 'gallery-img-2', label: 'Morning pour-overs' },
  { cls: 'gallery-img-3', label: 'Fresh-baked daily' },
  { cls: 'gallery-img-4', label: 'Cozy corners & good light' },
  { cls: 'gallery-img-5', label: 'Latte art by our baristas' },
]

export const TESTIMONIALS = [
  {
    initials: 'SR',
    name: 'Sarah R.',
    source: 'Google Review · 5 stars',
    quote: 'The Amber Gold Latte changed my life. I come in every morning before work and the baristas already know my order. This place is pure magic.',
  },
  {
    initials: 'MK',
    name: 'Marcus K.',
    source: 'Yelp Review · 5 stars',
    quote: "Best cold brew in the city, hands down. The atmosphere is incredible for working remotely — fast WiFi, great music, and they never rush you out.",
  },
  {
    initials: 'JP',
    name: 'Jamie P.',
    source: 'Tripadvisor · 5 stars',
    quote: "We hosted our team's monthly breakfast here and everyone raved about the food. The avocado toast and breakfast sandwiches were absolutely on point.",
  },
]

export const STATS = [
  { target: 12, unit: '+', label: 'Years of Craft' },
  { target: 34, unit: '',  label: 'Menu Items' },
  { target: 98, unit: '%', label: 'Happy Customers' },
  { target: 6,  unit: '',  label: 'Origin Countries' },
]

export const NAV_LINKS = [
  { id: 'about',   label: 'About' },
  { id: 'menu',    label: 'Menu' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'hours',   label: 'Visit Us' },
]
