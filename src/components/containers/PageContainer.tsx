import React from "react";
import { motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
    className?: string;
}

const PageContainer = ({ children, className }: Props) => {
    return (
        <motion.div
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className={`w-full min-h-screen overflow-x-hidden ${className}`}
        >
            {children}
            {/* <div className="mt-28"></div> */}
        </motion.div>
    );
};

export default PageContainer;
