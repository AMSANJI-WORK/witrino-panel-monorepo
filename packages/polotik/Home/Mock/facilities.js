import EstelamIcon from "@commen/icons/components/polotik/Estelam.vue";
import HarajiIcon from "@commen/icons/components/polotik/Haraji.vue";
import MonaghesehIcon from "@commen/icons/components/polotik/Monagheseh.vue";
import MySiteIcon from "@commen/icons/components/polotik/MySite.vue";
import TahatorIcon from "@commen/icons/components/polotik/Tahator.vue";
import MozayedehIcon from "@commen/icons/components/polotik/Mozayedeh.vue";
export default [
  {
    title: "تهاتر",
    subtitle: "مبادله کالا و خدمات",
    text: "سامانه آنلاین معاوضه پایاپای انوع کالا و خدمات",
    icon: TahatorIcon,
    route: "/barter",
    disabled: false,
    number: 1,
  },
  {
    title: "استعلام",
    subtitle: "استعلام عمومی قیمت",
    text: "استعلام مستقیم قیمت کالا و خدمات از واحدهای صنفی",
    icon: EstelamIcon,
    route: "/inquiry",
    disabled: false,
    number: 2,
  },
  {
    title: "مناقصه",
    subtitle: "آگهی مناقصه",
    text: "سامانه جامع ثبت و دریافت آگهی  مناقصات و برگزاری آنلاین",
    icon: MonaghesehIcon,
    route: "/tender",
    disabled: false,
    number: 3,
  },
  {
    title: "مزایده",
    subtitle: "آکهی مزایده",
    text: "سامانه جامع ثبت و دریافت آگهی مزایدات و برگزاری آنلایت",
    icon: MozayedehIcon,
    route: "/auction",
    disabled: false,
    number: 4,
  },
  {
    title: "حراجی",
    subtitle: "برگزاری حراجی",
    text: "سامانه برگزاری آنلاین حراجی کالا و خدمات",
    icon: HarajiIcon,
    route: "/sale",
    disabled: false,
    number: 5,
  },
  {
    title: "سایت من",
    subtitle: "صفحه من در پلتیک",
    text: "صفحه نمایش ویترین فروشگاه من در سامانه پلتیک",
    icon: MySiteIcon,
    href: "https://polotik.biz/sellers/",
    disabled: false,
    number: 6,
  },
];
