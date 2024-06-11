import { ref } from "vue";

export const useSide = () => {
  const menu = ref([
    { icon: "/icons/home.svg", name: "Home", url: "/home" },
    { icon: "/icons/course.svg", name: "Course", url: "/course" },
    { icon: "/icons/student.svg", name: "Students", url: "/students" },
    { icon: "/icons/pay.svg", name: "Payment", url: "/payment" },
    { icon: "/icons/report.svg", name: "Report", url: "/report" },
    { icon: "/icons/setting.svg", name: "Setting", url: "/setting" },
  ]);

  return { menu };
};
