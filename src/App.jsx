
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, PhoneCall, Mail, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <motion.div className="p-6 max-w-6xl mx-auto space-y-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Montelux Mansion</h1>
        <p className="text-lg text-muted-foreground">Luksuzna vila s bazenom, panoramskim pogledom i vrhunskim sadržajem u Tivtu.</p>
      </header>
    </motion.div>
  );
}
