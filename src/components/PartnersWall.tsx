'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

function encodeSrc(src: string): string {
    return src.replace(/&/g, '%26').replace(/'/g, '%27');
}

const allLogos = [
    { name: 'Anh and Chi', src: '/1. Anh and Chi.png' },
    { name: 'JoeFortes', src: '/2. JoeFortes.png' },
    { name: 'Nook', src: '/3. Nook.png' },
    { name: 'Via Tevere', src: '/4. Via Tevere.png' },
    { name: 'Hotel Georgia', src: '/16. Hotel Georgia.png' },
    { name: 'Pan Pacific Vancouver', src: '/17. Pan Pacific Vancouver.png' },
    { name: 'Elem', src: '/18. Elem.png' },
    { name: 'Brooklyn Dumpling Shop', src: '/19. Brooklyn Dumpling Shop.png' },
    { name: 'Shipyards Night Market', src: '/20. Shipyards Night Market.png' },
    { name: 'Time Out Market', src: '/3.Time Out Market.png' },
    { name: 'Brewery & The Beast', src: '/21 Brewery & The Beast.png' },
    { name: 'Le Crocodile', src: '/22. Le Crocodile.png' },
    { name: 'Mister', src: '/195. Mister.png' },
    { name: 'The Acorn', src: '/23. The Acorn.png' },
    { name: 'Call Me Back', src: '/24. Call Me Back.png' },
    { name: 'Baan Lao', src: '/25. Baan Lao.png' },
    { name: 'Melo Patisserie', src: '/26. Melo Patisserie.png' },
    { name: 'Ciclo Espresso', src: '/27. Ciclo Espresso.png' },
    { name: 'Odd Burger', src: '/28. Odd Burger.png' },
    { name: 'Grape Vibes', src: "73.Grape Vibes.png" },
    { name: 'Folke', src: '/29. Folke.png' },
    { name: 'Fiorino', src: '/30. Fiorino.png' },
    { name: 'Wildlight Kitchen & Bar', src: '/32. Wildlight Kitchen & Bar.png' },
    { name: 'St. Lawrence', src: '/34. St. Lawrence.png' },
    { name: 'Fanny Bay Oysters', src: '/35. Fanny Bay Oysters.png' },
    { name: "Steve's Poke", src: "/36. Steve’s Poke.png" },
    { name: 'Kozak', src: '/37. Kozak.png' },
    { name: 'Sula Indian Restaurant', src: '/38.  Sula Indian Restaurant.png' },
    { name: 'Di Beppe', src: '/40. Di Beppe.png' },
    { name: 'Tacofino', src: '/2.Tacofino.png' },
    { name: 'Dockside', src: '/41. Dockside.png' },
    { name: 'Loam', src: "46.Loam.png" },
    { name: 'Brix & Mortar', src: '/42. Brix & Mortar.png' },
    { name: 'Atlas Steak House', src: '/43. Atlas Steak House.png' },
    { name: 'Bar Asra', src: '/45. Bar Asra.png' },
    { name: 'La Ruota Pizza', src: '/46. La Ruota Pizza.png' },
    { name: 'Yolks', src: "7.Yolks.png" },
    { name: 'AJs Pizza', src: '/47. AJ_s Pizza.png' },
    { name: 'Grounds for Coffee', src: '/48. Grounds for Coffee.png' },
    { name: 'Soft Peaks', src: '/49. Soft Peaks.png' },
    { name: 'Slo Coffee', src: '/108. Slo Coffee.png' },
    { name: 'One Under', src: '/50. One Under.png' },
    { name: "Big Mama & Papa's Pizza", src: "/51. Big_Mama_&_Papas Pizza.png" },
    { name: 'Park Drive Bar', src: '/52. Park Drive Bar.png' },
    { name: 'FlyOver Vancouver', src: '/53. FlyOver Vancouver.png' },
    { name: '49th Parallel', src: '/54. 49th Parallel.png' },
    { name: 'Prado Café', src: '/55. Prado Café.png' },
    { name: 'Pallet Coffee', src: '/56. Pallet Coffee.png' },
    { name: 'Earl of Sandwich', src: '/57. Earl of Sandwich.png' },
    { name: 'Barcelos', src: '/59. Barcelos.png' },
    { name: 'Vancouver Cherry Blossom Festival', src: '/60. Vancouver Cherry Blossom Festival.png' },
    { name: 'Touk', src: "58.Touk.png" },
    { name: 'Kitchen Table Group', src: '/61. Kitchen Table Group.png' },
    { name: 'BC Halal Food Fest', src: '/62. BC Halal Food Fest.png' },
    { name: 'Afghan Kitchen', src: '/63. Afghan Kitchen.png' },
    { name: 'Afghan Horseman', src: '/64. Afghan Horseman.png' },
    { name: 'HellCrust', src: '/65. HellCrust.png' },
    { name: 'Pizza Maru', src: '/66. Pizza Maru.png' },
    { name: 'Uncle Fatih', src: '/67. Uncle Fatih.png' },
    { name: 'Fuwa Fuwa', src: '/68. Fuwa Fuwa.png' },
    { name: 'Horin Tonkotsu Ramen', src: '/70. Horin Tonkotsu Ramen.png' },
    { name: 'Katsu San', src: '/71. Katsu San.png' },
    { name: 'Saku', src: '/72. Saku.png' },
    { name: 'Taishoken', src: '/74. Taishoken.png' },
    { name: 'Ganbei Izakaya', src: '/75. Ganbei Izakaya.png' },
    { name: 'Suika', src: '/76. Suika.png' },
    { name: 'Kamei', src: '/77. Kamei.png' },
    { name: 'Ba Le Banh Mi', src: '/78. Ba Le Banh Mi.png' },
    { name: 'Madame Danh', src: '/79. Madame Danh.png' },
    { name: 'Damaskino Shawarma', src: '/81. Damaskino Shawarma.png' },
    { name: 'Belgard Kitchen', src: '/82. Belgard Kitchen.png' },
    { name: "Frankie's Jazz Club", src: "/83. Frankie’s Jazz Club.png" },
    { name: 'Onda by Casereccio', src: '/85. Onda by Casereccio.png' },
    { name: 'Giusti', src: '/86. Giusti.png' },
    { name: 'Robba da Matti', src: '/87. Robba da Matti.png' },
    { name: 'Six Acres', src: '/88. Six Acres.png' },
    { name: 'Havana', src: '/89. Havana.png' },
    { name: 'Nostos Taverna', src: '/90. Nostos Taverna.png' },
    { name: 'Foret Noire', src: '/91. Foret Noire.png' },
    { name: 'House of Dawn', src: '/92. House of Dawn.png' },
    { name: "Marcello's", src: "/93. Marcello_s.png" },
    { name: 'Fratelli', src: '/94. Fratelli.png' },
    { name: 'Takenaka', src: '/95. Takenaka.png' },
    { name: 'Hestia Kitchen', src: '/96. Hestia Kitchen.png' },
    { name: 'Bonjour Vietnam', src: '/97. Bonjour Vietnam.png' },
    { name: 'General Public', src: '/98. General Public.png' },
    { name: 'The Boxcar', src: '/99. The Boxcar.png' },
    { name: 'The Chickadee Room', src: '/100. The Chickadee Room.png' },
    { name: 'The Burrow', src: '/101. The Burrow.png' },
    { name: 'The Gemm', src: '/102. The Gemm.png' },
    { name: 'The Shed', src: '/103. The Shed.png' },
    { name: 'Perfecto Cafe', src: '/104. Perfecto Cafe.png' },
    { name: 'Funk Coffee', src: '/105. Funk Coffee.png' },
    { name: 'Comma Cafe', src: '/106. Comma Cafe.png' },
    { name: 'Little Cafe on Robson', src: '/107. Little Cafe on Robson.png' },
    { name: 'Hooray Cafe & Coffee Lab', src: '/109. Hooray Cafe & Coffee Lab.png' },
    { name: 'Sud Cafe', src: '/110. Sud Cafe.png' },
    { name: 'Mon Paris Bakery', src: '/111. Mon Paris Bakery.png' },
    { name: 'Jade Leaf Matcha', src: '/112. Jade Leaf Matcha.png' },
    { name: 'Rolled West Coast', src: '/113. Rolled West Coast.png' },
    { name: 'Kobo Ice Cream', src: '/114. Kobo Ice Cream.png' },
    { name: 'Mochido', src: '/115. Mochido.png' },
    { name: 'Desserts Artisanaux', src: '/116. Desserts Artisanaux.png' },
    { name: 'Chocolat Favoris', src: '/117. Chocolat Favoris.png' },
    { name: 'Hanoi Drip', src: '/118. Hanoi Drip.png' },
    { name: 'Northern Cafe', src: '/119. Northern Cafe.png' },
    { name: 'Bean and Berry', src: '/120. Bean and Berry.png' },
    { name: 'Posh Cafe', src: '/121. Posh Cafe.png' },
    { name: 'The Basic', src: '/122. The Basic.png' },
    { name: '123Dough', src: '/123. 123Dough.png' },
    { name: 'Alohaaa', src: '/124. Alohaaa.png' },
    { name: 'Andonis', src: '/125. Andonis.png' },
    { name: 'Archr', src: '/126. Archr.png' },
    { name: 'Archer', src: '/127. Archer.png' },
    { name: 'Alaia', src: '/128. Alaia.png' },
    { name: 'Bai Bua', src: '/129. Bai Bua.png' },
    { name: 'Belli', src: '/130. Belli.png' },
    { name: 'Britannia General', src: '/131. Britannia General.png' },
    { name: 'Boteco Brazil', src: '/132. Boteco Brazil.png' },
    { name: 'Coffee Party', src: '/133. Coffee Party.png' },
    { name: 'Collective Goods', src: '/134. Collective Goods.png' },
    { name: 'Donegals', src: '/135. Donegal_s.png' },
    { name: 'Douce Diner', src: '/136. Douce Diner.png' },
    { name: 'Ellipsis', src: '/137. Ellipsis.png' },
    { name: 'Erbil Restaurant', src: '/138. Erbil Restaurant.png' },
    { name: "Fred's Kitsilano", src: "/139. Freds_Kitsilano.png" },
    { name: 'Friendlies', src: '/140. Friendlies.png' },
    { name: "Gigi's", src: "/141. Gigi's.png" },
    { name: "JJ's", src: "/142. JJ_s.png" },
    { name: 'Just Another', src: '/143. Just Another.png' },
    { name: 'Kavita', src: '/144. Kavita.png' },
    { name: 'Kisamos', src: '/145. Kisamos.png' },
    { name: 'Kits Beach Coffee', src: '/146. Kits Beach Coffee.png' },
    { name: 'La Grotta del Formaggio', src: '/147. La Grotta del Formaggio.png' },
    { name: 'Mercato & Cantina di Luigi', src: '/148. Mercato & Cantina di Luigi.png' },
    { name: "Mum's the Word", src: "/149. Mum's the Word.png" },
    { name: 'Murmurs & Things', src: '/150. Murmurs & Things.png' },
    { name: 'Nabi House', src: '/151. Nabi House.png' },
    { name: "Neighbour's", src: "/152. Neighbour's.png" },
    { name: 'Night Owl', src: '/153. Night Owl.png' },
    { name: 'Nomo Nomo', src: '/155. Nomo Nomo.png' },
    { name: "Nonna's Cucina", src: "/155. Nonna's Cucina.png" },
    { name: 'Orchard Luxe', src: '/156. Orchard Luxe.png' },
    { name: 'Parthenon', src: '/157. Parthenon.png' },
    { name: 'Petrichor Social', src: '/158. Petrichor Social.png' },
    { name: 'Phonatic Social', src: '/159. Phonatic Social.png' },
    { name: 'Pin Pin', src: '/160. Pin Pin.png' },
    { name: 'Pressato', src: '/161. Pressato.png' },
    { name: 'Rubato', src: '/162. Rubato.png' },
    { name: 'Saba Cafe', src: '/163. Saba Cafe.png' },
    { name: 'Sawasdee Thai', src: '/164. Sawasdee Thai.png' },
    { name: 'Secret Garden Tea (Kerrisdale)', src: '/165. Secret Garden Tea (Kerrisdale).png' },
    { name: 'Section 7', src: '/167. Section 7.png' },
    { name: 'Sooda', src: '/167. Sooda.png' },
    { name: 'Stega', src: '/168. Stega.png' },
    { name: 'Sud Soi', src: '/169. Sud Soi.png' },
    { name: 'Sun Bo Kong', src: '/170. Sun Bo Kong.png' },
    { name: 'Sunflower Lodge', src: '/171. Sunflower Lodge.png' },
    { name: 'Superbolt', src: '/172. Superbolt.png' },
    { name: 'Taylight Kitchen', src: '/173. Taylight Kitchen.png' },
    { name: 'The Dolar Shop', src: '/174. The Dolar Shop.png' },
    { name: 'Zhengxin', src: '/175. Zhengxin.png' },
    { name: "Wing'n It", src: "/176. Wing'n It .png" },
    { name: 'Grill Party', src: '/177. Grill Party.png' },
    { name: 'Okome', src: '/178. Okome.png' },
    { name: 'Dix Vancouver', src: '/179. Dix Vancouver.png' },
    { name: '350F Fried Chicken', src: '/180. 350F Fried Chicken.png' },
    { name: 'Superthai Hotpot', src: '/181. Superthai Hotpot.png' },
    { name: 'Zugba', src: '/182. Zugba.png' },
    { name: 'Cofu', src: '/183. Cofu.png' },
    { name: 'Fishworks', src: '/184. Fishworks.png' },
    { name: 'Halina', src: '/185. Halina.png' },
    { name: 'BratHaus', src: '/186. BratHaus.png' },
    { name: "Steven's", src: "/187. Steven's.png" },
    { name: 'Haven Bar & Grill', src: '/188. Haven Bar & Grill.png' },
    { name: 'Stanley Park Brewing', src: '/189. Stanley Park Brewing.png' },
    { name: 'Peya', src: '/190. Peya.png' },
    { name: 'Chez Nous', src: '/191. Chez Nous.png' },
    { name: 'Hahaheri', src: '/192. Hahaheri.png' },
    { name: 'Paratha2Pasta', src: '/193. Paratha2Pasta.png' },
    { name: 'Meetrice', src: '/194. Meetrice.png' },
    { name: 'Rice Burger', src: '/196. Rice Burger.png' },
    { name: 'Chickpea', src: '/197. Chickpea.png' },
    { name: 'DoorDash', src: '/1.DoorDash.png' },
    { name: 'Meridian Farm Market', src: "4.Meridian Farm Market.png" },
    { name: 'Meat & Bread', src: "5.Meat & Bread.png" },
    { name: 'Nuba', src: "6.Nuba.png" },
    { name: 'Trees Coffee', src: "8.Trees Coffee.png" },
    { name: 'Kobe', src: "9.Kobe.png" },
    { name: 'Butter Baked Goods', src: "10.Butter Baked Goods.png" },
    { name: 'Jam Jar', src: "11.Jam Jar.png" },
    { name: 'Zaatar W Zeit', src: "12.Zaatar W Zeit.png" },
    { name: 'Pür & Simple', src: "13.Pür & Simple.png" },
    { name: "Finch's", src: "14.Finch_s.png" },
    { name: 'Rocky Mountain', src: "15.Rocky Mountain.png" },
    { name: 'D Spot', src: "16.D Spot.png" },
    { name: 'Pizza Garden', src: "17.Pizza Garden.png" },
    { name: 'Key Party', src: "18.Key Party.png" },
    { name: "Hail Mary's", src: "19.Hail Mary_s.png" },
    { name: 'Aureliana', src: "20.Aureliana.png" },
    { name: 'Carlino', src: "21.Carlino.png" },
    { name: 'Bridge', src: "22.Bridge.png" },
    { name: 'Luppolo Brewing', src: "23.Luppolo Brewing.png" },
    { name: 'Pallet', src: "24.Pallet.png" },
    { name: 'Fresh Solo Pasta', src: "25.Fresh Solo Pasta.tiff" },
    { name: 'Stock & Supply', src: "26.Stock & Supply.png" },
    { name: "Cioffi's", src: "27.Cioffi_s.png" },
    { name: 'Angus T', src: "28.Angus T.png" },
    { name: 'Four Winds Brewery', src: "29.Four Winds Brewery.png" },
    { name: "Donegal's", src: "30.Donegal_s.png" },
    { name: "Tahini's", src: "31.Tahini_s.png" },
    { name: 'Sula Cafe', src: "32.Sula Cafe.png" },
    { name: 'Bonta', src: "33.Bonta.png" },
    { name: 'Alice & Brohm', src: "34.Alice & Brohm.png" },
    { name: 'Il Corvo', src: "35.Il Corvo.png" },
    { name: 'Those Indian Guys', src: "36.Those Indian Guys.png" },
    { name: "Ricardo's", src: "37.Ricardo_s.png" },
    { name: 'Feast & Fallow', src: "38.Feast & Fallow.png" },
    { name: 'Holy Shakes', src: "39.Holy Shakes.png" },
    { name: 'Killer Ice Cream', src: "40.Killer Ice Cream.png" },
    { name: 'Naan Club', src: "41.Naan Club.png" },
    { name: 'Tacosaurus', src: "42.Tacosaurus.png" },
    { name: 'Monzo Burger', src: "43.Monzo Burger.png" },
    { name: 'VF', src: "45.VF.png" },
    { name: 'Meros', src: "47.Meros.png" },
    { name: 'Good9', src: "48.Good9.png" },
    { name: 'Palate', src: "49.Palate.png" },
    { name: 'Cockney', src: "50.Cockney.png" },
    { name: 'Crabapple', src: "51.Crabapple.png" },
    { name: 'Sushi Hinode', src: "52.Sushi Hinode.png" },
    { name: 'Indian Affair', src: "53.Indian Affair.png" },
    { name: 'Istanbul Doner', src: "54.Istanbul Doner.png" },
    { name: 'Melo Patisserie', src: "55.Melo Patisserie.png" },
    { name: 'Alchemy Kitchen & Bar', src: "56.Alchemy Kitchen & Bar.webp" },
    { name: 'La Ruota', src: "57.La Ruota.png" },
    { name: 'Giusti', src: "59.Giusti.png" },
    { name: 'L Atelier', src: "60.L_Atelier.png" },
    { name: 'Yume', src: "61.Yume.png" },
    { name: 'Float30', src: "62.Float30.png" },
    { name: 'Puerto Mexican', src: "63.Puerto Mexican.png" },
    { name: 'Saint St Grill', src: "64.Saint St Grill.png" },
    { name: 'Tutto Belle', src: "65.Tutto Belle.png" },
    { name: 'The Garden', src: "66.The Garden.png" },
    { name: 'Bean and Berry', src: "67.Bean and Berry.png" },
    { name: 'Dosa Hub', src: "68.Dosa Hub.png" },
    { name: "Mom's Food Truck", src: "69.Mom_s Food Truck.png" },
    { name: 'The Sauce', src: "70.The Sauce.png" },
    { name: 'The Sequel', src: "71.The Sequel.png" },
    { name: 'The Backyard', src: "72.The Backyard.png" },
    { name: 'Verandah', src: "74.Verandah.png" },
    { name: 'Neighbours', src: "/75.Neighbours.png" },
    { name: 'Karakoram', src: "76.Karakoram.png" },
    { name: 'Samurai', src: "77.Samurai.png" },
    { name: 'Squamish Samurai Sushi', src: "78.Squamish Samurai Sushi.png" },
    { name: 'Ignite Pizzeria', src: "79.Ignite Pizzeria.png" },
    { name: 'London Fish', src: "80.London Fish.png" },
    { name: 'Un Pho Get A Bowl', src: "81.Un Pho Get A Bowl.png" },
    { name: 'Taqueria Jalisco', src: "82.Taqueria Jalisco.png" },
    { name: 'Hariyali', src: "83.Hariyali.png" },
    { name: 'Dragon Bowl', src: "84.Dragon Bowl.png" },
    { name: 'Tocha', src: "85.Tocha.png" },
    { name: 'MOD Kitchen', src: "86.MOD Kitchen.png" },
    { name: 'Iamajoun', src: "87.Iamajoun.png" },
    { name: 'Mnimes', src: "88.Mnimes.png" },
    { name: 'Broken Seal', src: "89.Broken Seal.png" },
    { name: 'Indian Bombay', src: "90.Indian Bombay.png" },
    { name: 'Bombay Masala', src: "91.Bombay Masala.png" },
    { name: 'G3 Restaurant', src: "92.G3 Restaurant.png" },
    { name: 'Same Vietnamese', src: "93.Same Vietnamese.png" },
    { name: 'Abracashaba', src: "94.Abracashaba.png" },
    { name: 'ROMA Italian North Vancouver', src: "95.ROMA Italian North Vancouver.png" },
    { name: 'Bevel Restaurant', src: "96.Bevel Restaurant.png" },
    { name: 'Hungryzus', src: "97.Hungryzus.png" },
    { name: 'CJH Bistro', src: "98.CJH Bistro.png" },
    { name: 'Sanjo Sushi', src: "99.Sanjo Sushi.png" },
    { name: 'TWK', src: "100.TWK.png" },
    { name: 'No Ne', src: "101.No Ne.png" },
    { name: 'Eivan', src: "102.Eivan.png" },
];

const BATCH_SIZE = 24;


function LogoItem({
    logo,
    priority = false,
}: {
    logo: { name: string; src: string };
    priority?: boolean;
}) {
    const [error, setError] = useState(false);

    if (error) {
        return null;
    }

    return (
        <div
            className="flex items-center justify-center p-3 md:p-4"
            style={{ aspectRatio: '1' }}
        >
            <img
                src={encodeSrc(logo.src)}
                alt={logo.name}
                loading={priority ? 'eager' : 'lazy'}
                fetchPriority={priority ? 'high' : 'auto'}
                decoding="async"
                onError={() => setError(true)}
                className="object-contain w-full h-full hover:opacity-100 transition-opacity duration-500"
                style={{
                    maxWidth: '120px',
                    maxHeight: '80px',
                }}
            />
        </div>
    );
}


export default function PartnersWall() {
    const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
    const sentinelRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const sentinel = sentinelRef.current;
        if (!sentinel) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                if (entry.isIntersecting) {
                    setVisibleCount((prev) => {
                        if (prev >= allLogos.length) {
                            observer.disconnect();
                            return prev;
                        }

                        return Math.min(prev + BATCH_SIZE, allLogos.length);
                    });
                }
            },
            {
                rootMargin: '800px 0px',
                threshold: 0,
            }
        );

        observer.observe(sentinel);

        return () => observer.disconnect();
    }, []);


    // const visibleLogos = allLogos.slice(0, visibleCount);
    const visibleLogos = allLogos;
    console.log('Total:', allLogos.length, 'Visible:', visibleCount);

    return (
        <section className="w-full py-16 md:py-24 px-4 md:px-10 lg:px-16" style={{ backgroundColor: '#ffffff' }}>
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-12 md:mb-20 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="font-sans text-[12px] uppercase tracking-[0.2em] text-black/30 mb-3"
                >
                    {allLogos.length}+ partners and counting
                </motion.p>
                <div className="overflow-hidden inline-block">
                    <motion.h1
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.1, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                        className="font-sans font-bold uppercase text-3xl md:text-5xl tracking-tight text-black pb-2"
                    >
                        Brands We Partner With
                    </motion.h1>
                </div>
            </div>

            {/* Logo wall grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-6 md:gap-8">
                {visibleLogos.map((logo, i) => (
                    <LogoItem
                        key={`${logo.name}-${i}`}
                        logo={logo}
                        priority={i < BATCH_SIZE}
                    />
                ))}
            </div>

            {/* Sentinel for infinite scroll loading */}
            {/* {visibleCount < allLogos.length && (
                <div ref={sentinelRef} style={{ height: '1px' }} />
            )} */}
        </section>
    );
}
