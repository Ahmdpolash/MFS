import { motion } from "framer-motion";
import { FloatingPaper } from "./floating-paper";
import { LogIn, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { RoboAnimation } from "./robo-animation";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center -z-20">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={3} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading- text-balanc font-bold text-white mb-6">
              📢আপনার ডিজিটাল লেনদেন এখন আরও
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                সহজ ও নিরাপদ!
              </span>
              🚀
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-xl  mb-8 max-w-2xl mx-auto"
          >
           💸 আমাদের ডিজিটাল ফিনান্স প্ল্যাটফর্মের মাধ্যমে দ্রুত, নিরাপদ এবং সহজে
            অর্থ পাঠান, গ্রহণ করুন ও ক্যাশ-আউট করুন। স্মার্ট লেনদেনের জন্য এখনই
            যোগ দিন! 🚀
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex  sm:flex-row items-center justify-center gap-4"
          >
            <Link to={"/sign-up"}>
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700  cursor-pointer text-white px-8"
              >
                <LogIn className="mr-2 h-5 w-5" />
                Create Account
              </Button>
            </Link>
            <Link to={"/about-us"}>
              <Button
                size="lg"
                variant="outline"
                className="hover:text-white cursor-pointer border-purple-500 hover:bg-purple-500/20"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Explore MoneyMate
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Animated robot */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <RoboAnimation />
      </div>

      <div className="absolute bottom-0  py-2 text-white text-center mx-auto left-[45%] right-[45%]">Developed By <a className="font-bold" href="http://linkedin.com/in/polashahmed"  target="_blank"
      >Polash</a></div>
    </div>
  );
};

export default Banner;
