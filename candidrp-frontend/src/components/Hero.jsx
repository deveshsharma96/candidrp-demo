import hero1 from "../assets/hero.png";
import hero2 from "../assets/Team.png";
import hero4 from "../assets/Team2.png";
import hero3 from "../assets/Services.png";

import aboutImg2 from "../assets/aboutus2.png";
import img1 from "../assets/AvinashChander.png";
import img2 from "../assets/MerlynChander.png";
import img3 from "../assets/SandraShantanu.png";
import img4 from "../assets/RishabhShantanu.png";
import img5 from "../assets/SatishKumar.png"; 
import { FaArrowRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom"; // ✅ FIXED

// Team images
const team = [
  { name: "Avinash Chander", img: img1 },
  { name: "Merlyn Chander", img: img2 },
  { name: "Sandra Shantanu", img: img3 },
  { name: "Rishabh Shantanu", img: img4 },
  { name: "Satish Kumar", img: img5 },
];

const loopData = [...team, ...team]; 


// animations
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Hero() {
  const navigate = useNavigate();

   const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

  // ✅ HERO IMAGES
  const heroImages = [hero1, hero2, hero3];

  // ✅ CLONE FOR LOOP
  const slides = [
    heroImages[heroImages.length - 1],
    ...heroImages,
    heroImages[0],
  ];

  const [current, setCurrent] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // ✅ ABOUT SECTION COUNT FIX
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // ✅ AUTO SLIDE (pause safe)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // ✅ LOOP FIX (no glitch)
  useEffect(() => {
    if (current === slides.length - 1) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrent(1);
      }, 800);
    }

    if (current === 0) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrent(slides.length - 2);
      }, 800);
    }
  }, [current, slides.length]);

  // ✅ RE-ENABLE ANIMATION
  useEffect(() => {
    if (!isAnimating) {
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    }
  }, [isAnimating]);

  
  return (
    <div className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* SLIDER */}
        <motion.div
          className="flex h-full"
          animate={{ x: `-${current * 100}%` }}
          transition={
            isAnimating
              ? { duration: 0.8, ease: "easeInOut" }
              : { duration: 0 }
          }
        >
          {slides.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </motion.div>

        {/* OVERLAY */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#1f0434]/90 via-[#0d0764]/20 to-transparent"></div> */}
         <div
  className="absolute inset-0"
  style={{
    background: `linear-gradient(
      to right,
      rgba(31, 4, 52, 0.95) 0%,     /* LEFT - strong dark */
      rgba(13, 7, 100, 0.6) 20%,    /* MIDDLE - smooth blend */
      rgba(13, 7, 100, 0.2) 50%,    /* RIGHT FADE START */
      rgba(13, 7, 100, 0) 100%      /* FULL TRANSPARENT */
    )`
  }}
></div>
        
        {/* CONTENT */}
<div className="absolute inset-0 z-10 flex items-center pt-20  px-16 text-white">
  <motion.div
    className="max-w-2xl"
    initial={{ opacity: 0, x: -80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    
  <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
               Connecting Talent to Opportunity &{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Find the Perfect Fit with Us!
              </span>
            </h1>

            <p className="text-xl text-indigo-100 leading-relaxed max-w-xl">
                      Our team brings extensive knowledge of your specific talent requirements across industries.

            </p>
      <br/><br/>



    <button
  onClick={() => navigate("/about")}
  className="group relative flex items-center 
  w-[200px] h-[60px] rounded-full overflow-hidden
  bg-gradient-to-r from-purple-800 via-purple-600 to-purple-500
  text-white font-semibold tracking-wide
  shadow-[0_8px_25px_rgba(128,0,128,0.4)]
  transition-all duration-500"
>
  {/* Sliding Circle */}
  <div
    className="absolute left-1 top-1 w-[52px] h-[52px] 
    bg-gray-200 rounded-full flex items-center justify-center
    text-purple-700 text-xl
    transition-all duration-500 ease-in-out
    group-hover:left-[calc(100%-56px)]"
  >
    →
  </div>

  {/* Text */}
  <span
    className="w-full text-center transition-all duration-500
    group-hover:-translate-x-4"
  >
    Read More
  </span>
</button>


  </motion.div> {/* ✅ IMPORTANT: correct closing */}
  {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
</div>
        

       
        {/* DIAMOND INDICATORS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
  {heroImages.map((_, index) => (
    <button
      key={index}
      onClick={() => {
        setCurrent(index + 1);
        setIsPaused(true);

        setTimeout(() => {
          setIsPaused(false);
        }, 5000);
      }}
      className={`text-xl transition-all ${
        current === index + 1
          ? "text-purple-700 scale-125"
          : "text-white/50"
      }`}
    >
      ◈
    </button>
  ))}
</div>

      </section>

      {/* ================= ABOUT ================= */}
      <motion.section
        ref={ref}
        className="py-20 px-16 bg-white grid md:grid-cols-2 gap-10 items-center"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp}>
          <span className="bg-gradient-to-r from-purple-900 to-purple-500  text-yellow-400 px-3 py-2 rounded-full text-sm font-medium">
            
            ABOUT US
          </span>
          

          <h2 className="text-4xl font-bold mt-4 mb-4 text-[#531192]">
            Global Reach, Local Expertise
          </h2>
          <br/>

          <p className="text-gray-600 mb-6">
            At Candid Resourcing Partners Ltd, we focus on solving recruitment challenges by delivering the right talent that fuels business growth and long-term success.
            <br/><br/>
            With strong expertise across banking, finance, IT, and healthcare, we use market insights and extensive networks to provide accurate, tailored hiring solutions. From junior roles to senior leadership, we ensure every placement aligns with your objectives and contributes to lasting organisational success.
          </p>

          <h2 className="text-xl font-bold mt-4 mb-4 text-[#3d0275]">
            CORE COMPETENCIES
          </h2>

          <ul className="text-gray-600 mb-6 space-y-1">
            <li>• Banking</li>
            <li>• IT</li>
            <li>• Finance</li>
            <li>• Healthcare</li>
          </ul>
        </motion.div>

        <motion.div variants={fadeUp} className="relative">
         <img src={aboutImg2} className="rounded-xl w-90" />     
          
        </motion.div>
      </motion.section>

    

      {/* ================= SERVICES ================= */}
<section className="py-20 px-16 bg-gray-50 text-center">
  <span className="bg-gradient-to-r from-purple-900 to-purple-500  text-yellow-400 px-3 py-2 rounded-full text-sm">
    OUR SERVICES
  </span>

 
    <h2 className="text-4xl font-bold mt-4 mb-10 text-[#531192] ">
    OUR RECRUITMENT SOLUTIONS
    </h2>
 

 

<motion.div
  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-50px" }}
>
  {[
    {
      title: "Permanent Recruitment",
      desc: "We leverage proven recruitment strategies to identify and deliver highly skilled professionals across multiple industries, ensuring the right long-term fit for your organisation.",
    },
    {
      title: "Executive Search",
      desc: "Our retained and executive search services prioritise your hiring needs, enabling access to top-tier and hard-to-reach talent through targeted headhunting expertise.",
    },
    {
      title: "Contract Hiring",
      desc: "We provide flexible contract hiring solutions, both inside and outside IR35, helping you scale your workforce efficiently based on project requirements.",
    },
    {
      title: "RPO Consultancy",
      desc: "From supporting your internal team to fully managing your recruitment process, we deliver strategic insights, improved efficiency, and cost-effective hiring solutions.",
    },
    {
      title: "Bespoke Solutions",
      desc: "Every organisation is unique. We design customised recruitment solutions tailored to your specific hiring challenges and business objectives.",
    },
    {
      title: "Talent Advisory",
      desc: "Our experts provide market insights, talent trends, and strategic guidance to help you make informed hiring decisions and stay ahead of the competition.",
    },
  ].map((item, i) => (
    <motion.div
      key={i}
      variants={cardAnimation}
      whileHover={{
        scale: 1.04,
        y: -8,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
      }}
      className="bg-white p-6 rounded-xl shadow text-left transition-all"
    >
      <h3 className="font-semibold mb-3 text-[#0b2c5a]">
        {item.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {item.desc}
      </p>
    </motion.div>
  ))}
</motion.div>
</section>

{/* ================= CTA ================= */}
      <motion.section
  className="py-20 px-16 
  bg-gradient-to-r from-[#1f0638] via-[#5b2c91] to-[#9b5de5]
  text-white flex justify-between items-center"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <div>
    <h2 className="text-3xl font-bold">
      Meet Your HR Needs with India's Leading Recruitment Agency
    </h2>
    <p className="text-gray-200 mt-2">
      Discover end-to-end HR solutions.
    </p>
  </div>

  <motion.button
   onClick={() => navigate("/about")}
  
    whileHover={{ scale: 1.05 }}
    className="bg-white text-black px-6 py-3 rounded-full"
  >
    Explore More →
  </motion.button>
</motion.section>

      {/* ================= INVESTORS ================= */}
      <motion.section
        className="py-20 px-16 grid md:grid-cols-2 gap-10 items-center"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeUp}>
          <span className="bg-gradient-to-r from-purple-900 to-purple-500  text-yellow-400 px-3 py-2 rounded-full text-sm">
            INVESTORS
          </span>

          <h2 className="text-3xl font-bold mt-4 mb-4 text-[#531192]">
            Global Talent Solutions
          </h2>

          <p className="text-gray-600">
            We are a young company with a proven track record of commitment to long-term value creation. Our approach is rooted in commitment, innovation, and a deep understanding of evolving business needs.
            <br/><br/>
            By leveraging advanced technology and data-driven insights, we are strategically positioned to create sustainable value for our clients and partners. As the Indian economy continues to grow, the demand for skilled talent is expected to rise significantly—presenting a strong opportunity for us to expand our capabilities and deliver impactful recruitment solutions.
            <br/><br/>
            At Candid Resourcing Partners Ltd, we are focused on connecting the right talent with the right opportunities, enabling organizations to scale, innovate, and succeed in an increasingly competitive landscape.

          </p>

          
        </motion.div>

        <motion.img variants={fadeUp} src={hero4} />
      </motion.section>

      
{/* 🔵 LEADERS SECTION */}
      <section className="bg-gray-100 py-16 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    <div>
      <h2 className="text-4xl text-[#4e0f89] mb-4">
        Our Leaders
      </h2>

      <p className="text-gray-600 mb-4">
        Focused on delivering an unparalleled, personalized experience.
      </p>

      <Link
        to="/team"
        className="text-blue-600 underline cursor-pointer hover:text-purple-600 transition"
      >
        View all leaders →
      </Link>
    </div>

    <div className="h-80 overflow-hidden rounded-xl bg-gray-100 flex items-center relative">
    
      {/* FADE */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>
    
      <motion.div
        className="flex gap-8 items-center"
        animate={{ x: [0, -1000] }} // 🔥 FIXED
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {loopData.map((member, i) => (
          <div key={i} className="flex flex-col items-center min-w-[180px]">
    
            {/* IMAGE */}
            <div className="w-50 h-60 rounded-xl overflow-hidden border-2 border-white shadow-md">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
    
            {/* NAME */}
            <p className="text-sm mt-2 text-gray-900 font-medium">
              {member.name}
            </p>
    
          </div>
        ))}
      </motion.div>
    
    </div>
   

  </div>
</section>
    
      

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 px-16 bg-gray-50">
  <h2 className="text-3xl font-bold mb-10 text-[#531192]">
    Our Latest Client's Feedback
  </h2>

  <motion.div
    className="grid md:grid-cols-3 gap-8"
    variants={stagger}
    initial="hidden"
    animate="show"
  >
    {[
      {
        text: "Candid Resourcing Partners is a highly reliable partner who successfully fills critical positions in record time. They have a thorough understanding of the talent landscape and are a great recruitment partner.",
      },
      {
        text: "CANDID has provided us with excellent service over the years. Whenever there is an urgent requirement, we rely on them, knowing they will deliver without fail.",
      },
      {
        text: "The team at Candidrp truly understands our recruitment needs and process flow. Their professional and friendly approach consistently delivers quality results.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        variants={fadeUp}
        whileHover={{ scale: 1.05 }}
        className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
      >
        {/* Quote Icon */}
        <div className="text-purple-700 text-3xl mb-3">❝</div>

        {/* Feedback */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {item.text}
        </p>

        {/* Client Name */}
        <h4 className="font-bold text-[#0b2c5a]">
          (Client Name)
        </h4>
      </motion.div>
    ))}
  </motion.div>
</section>

      
     

    </div>
  );
}