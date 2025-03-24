import React from "react";
import { createRoot } from 'react-dom/client';
import Header from "./components/Header";
import AcademyInfo from "./components/AcademyInfo";
import MysticLessons from "./components/MysticLessons";
import TeacherList from "./components/TeacherList";
import LessonPlan from "./components/LessonPlan";
import TestimonialSlider from "./components/TestimonialSlider";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import './index.css'

const App = () => {
   
  return (
    <div>
      <Header></Header>
      <AcademyInfo></AcademyInfo>
      <MysticLessons></MysticLessons>
      <TeacherList></TeacherList> 
      <LessonPlan></LessonPlan> 
      <TestimonialSlider></TestimonialSlider>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  )
  
};

// Отримуємо елемент кореневого DOM
const rootElement = document.getElementById('root');

// Створюємо корінь через новий API
const root = createRoot(rootElement);

// Рендеримо ваш компонент
root.render(<App />);
