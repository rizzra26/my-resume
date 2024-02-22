import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import _sfc_main$e from './nuxt-icon-002699d4.mjs';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import __nuxt_component_0$3 from './Icon-855b8e20.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main$d = {
  methods: {
    printPage() {
      window.print();
    }
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_icon = _sfc_main$e;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-end justify-center mt-5 space-x-3 text-2xl cursor-pointer lg:text-2xl lg:m-0 text-slate-500" }, _attrs))}><button target="_blank" class="no-print transition-all duration-200 hover:text-slate-700 text-2xl">`);
  _push(ssrRenderComponent(_component_nuxt_icon, { name: "printer" }, null, _parent));
  _push(`</button><a href="https://github.com/rizzra26" target="_blank" class="transition-all duration-200 hover:text-slate-700 text-2xl">`);
  _push(ssrRenderComponent(_component_nuxt_icon, { name: "github" }, null, _parent));
  _push(`</a><a href="https://www.linkedin.com/in/rizkira/" target="_blank" class="transition-all duration-200 hover:text-slate-700 text-2xl">`);
  _push(ssrRenderComponent(_component_nuxt_icon, { name: "linkedin" }, null, _parent));
  _push(`</a><a href="mailto:rizzra26@gmail.com" target="_blank" class="transition-all duration-200 hover:text-slate-700 text-2xl">`);
  _push(ssrRenderComponent(_component_nuxt_icon, { name: "at" }, null, _parent));
  _push(`</a></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Socials.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$c = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  const _component_Socials = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center my-12 lg:flex-row" }, _attrs))}><div class="flex flex-col items-center justify-between w-full m-0 lg:flex-row"><div class="flex flex-col items-start justify-center"><h1 class="m-auto mt-6 font-inter text-3xl font-bold slide-top lg:m-0"> Rizki Ramadhan I.M. </h1><h2 class="m-auto font-inter text-lg font-medium text-center text-slate-500 slide-top lg:m-0"> Full-Stack Developer </h2></div>`);
  _push(ssrRenderComponent(_component_Socials, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Me.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$b]]);
const paragraph = `Hi, my name is Rizki. I'm a Full-Stack Developer based in Bekasi, Indonesia.

A reliable and passionate person for building innovative and intuitive web or mobile applications, I'm constantly striving to improve my skills and stay up-to-date with the latest technologies.

I'm currently self taught learning Back-End skills with Nest and doing some indie project, I'm also looking for a job as a developer.`;
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "AboutMe",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-inter" }, _attrs))}><h4 class="pt-10 pb-2 font-inter text-base font-normal text-slate-500/90"> About </h4><div class="space-y-5 text-sm"><p class="whitespace-pre-wrap">${paragraph}</p></div><a href="https://www.google.com/maps/search/bekasi" target="_blank" rel="noreferrer" class="flex gap-2 mt-5 text-sm transition-all duration-200 hover:text-slate-300 no-print text-slate-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-mdi-map-marker-outline",
        class: "text-2xl"
      }, null, _parent));
      _push(` West Java - Bekasi, Indonesia </a></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutMe.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-5 font-inter text-base font-normal text-slate-500/90" }, _attrs))}> Skillset <ul class="text-sm font-medium text-white list-disc"><li class="space-x-2"><span>HTML5</span><span class="font-light text-[#93c5fd] font-inter">/</span><span>CSS</span></li><li class="space-x-2"><span>JavaScript (ES6)</span><span class="font-light text-[#93c5fd] font-inter">/</span><span>TypeScript</span></li><li class="space-x-2"><span>Vue (Nuxt)</span><span class="font-light text-[#93c5fd] font-inter">/</span><span>React (Next)</span><span class="font-light text-[#93c5fd] font-inter">/</span><span>React Native</span></li><li class="space-x-2"><span>TailwindCSS</span><span class="font-light text-[#93c5fd] font-inter">/</span><span>SASS</span></li><li class="space-x-2"><span>Node.js</span><span class="font-light text-[#93c5fd] font-inter">/</span><span>Express</span><span class="font-light text-[#93c5fd] font-inter">/</span><span>Nest JS</span></li><li class="space-x-2"><span>MongoDB</span><span class="font-light text-[#93c5fd] font-inter">/</span><span>MySQL</span><span class="font-light text-[#93c5fd] font-inter">/</span><span>PostgreSQL</span><span class="font-light text-[#93c5fd] font-inter">/</span><span>Prisma</span></li><li class="space-x-2"><span>Swagger</span><span class="font-light text-[#93c5fd] font-inter">/</span><span>StoryBook</span></li><li class="space-x-2"><span>Docker</span><span class="font-light text-[#93c5fd] font-inter">/</span><span>Cloudflare</span><span class="font-light text-[#93c5fd] font-inter">/</span><span>Google Cloud</span><span class="font-light text-[#93c5fd] font-inter">/</span><span>AWS</span></li><li class="space-x-2"><span>GraphQL</span><span class="font-light text-[#93c5fd] font-inter">/</span><span>REST</span></li></ul></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skills/Development.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-5 font-inter text-base font-normal text-slate-500/90" }, _attrs))}> Personal Skills <ul class="text-sm font-medium text-white list-disc"><li class="space-x-2">Patience</li><li class="space-x-2">Empathy</li><li class="space-x-2">Flexibility</li><li class="space-x-2">Teamwork</li><li class="space-x-2">Self-Awareness</li><li class="space-x-2">Open-Mindedness</li><li class="space-x-2">Fast-Paced</li><li class="space-x-2">Problem Solving</li></ul></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skills/Personal.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-5 font-inter text-base font-normal text-slate-500/90" }, _attrs))}> Interests <ul class="text-sm font-medium text-white list-disc"><li class="space-x-2">Anime</li><li class="space-x-2">Music</li><li class="space-x-2">Video Games</li><li class="space-x-2">Tech Industry</li><li class="space-x-2">New Technologies</li></ul></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skills/Interests.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_SkillsDevelopment = __nuxt_component_0;
  const _component_SkillsPersonal = __nuxt_component_1;
  const _component_SkillsInterests = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-between mt-5 cursor-default sm:flex-row lg:flex-col xl:flex-col 2xl:flex-row" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_SkillsDevelopment, null, null, _parent));
  _push(ssrRenderComponent(_component_SkillsPersonal, null, null, _parent));
  _push(ssrRenderComponent(_component_SkillsInterests, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skills/index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-inter font-sm" }, _attrs))}><h4 class="mb-2 font-inter text-base font-normal text-slate-500/90"> Languages </h4><div><div class="inline-block"><span class="text-sm font-medium">Bahasa Indonesia</span><span class="ml-1 text-sm">(Native speaker)</span></div><span class="font-light text-[#93c5fd] font-inter px-1">/</span><div class="inline-block"><span class="text-sm font-medium">English</span><span class="ml-1 text-sm">(Intermediate)</span></div><span class="font-light text-[#93c5fd] font-inter px-1">/</span><div class="inline-block"><span class="text-sm font-medium">\u65E5\u672C\u8A9E</span><span class="ml-1 text-sm">(Basic)</span></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Languages.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _imports_0 = "" + buildAssetsURL("dot.8361cb72.svg");
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-5" }, _attrs))}><div class="pb-5 text-xl font-light font-inter text-slate-500/90">Work</div><div class="grid grid-cols-1 gap-4"><div><div class="flex justify-between text-sm font-inter"><div class="flex flex-row items-baseline"><a class="font-medium border-b border-dashed cursor-pointer font-inter text-slate-800 border-slate-500/90" href="https://course.oqurystudio.com/" target="_blank"> Oqury Studio<span class="hidden sm:inline">,</span></a><p class="hidden ml-1 text-sm font-normal text-slate-700 sm:inline"> Software Engineer </p></div><h4 class="text-xs font-medium font-inter text-slate-500/90"> Apr 2023 - Aug 2023 </h4></div><p class="mt-2 text-sm font-normal font-inter text-slate-700"> A company that specializes in the Software Development, Education, and UI/UX Designer </p><ul class="text-sm font-normal text-white list-disc font-inter"><li class="text-slate-700"> Building an application called <a class="border-b border-dashed cursor-pointer border-slate-500/90" href="https://rph.oqurydev.my.id/" target="_blank">RPHClick</a>. Application to create schedules for teachers, during the teaching and learning process in Malaysia. </li><li class="text-slate-700"> Slicing Figma Design to React Native code, and implemented google oauth and facebook for authentication on mobile application. </li><li class="text-slate-700"> Build Back Office Website with Vite for efficiency and effectiveness of the development process. </li><li class="text-slate-700"> Create Full REST API Service using Nest and payment gateway with Malaysian payment platform toyyibPay </li></ul><p class="inline-block mt-2 text-sm font-medium font-inter text-slate-700"> Skills: <span class="inline-block font-normal text-slate-700"> TypeScript <img${ssrRenderAttr("src", _imports_0)} class="inline w-5"> React Native <img${ssrRenderAttr("src", _imports_0)} class="inline w-5"> Nest JS <img${ssrRenderAttr("src", _imports_0)} class="inline w-5"> PostgreSQL </span></p></div><div><div class="flex justify-between text-sm font-inter"><div class="flex flex-row items-baseline"><a class="font-medium border-b border-dashed cursor-pointer font-inter text-slate-800 border-slate-500/90" href="https://majapahit.id/" target="_blank"> PT. Majapahit Teknologi Nusantara<span class="hidden sm:inline">,</span></a><p class="hidden ml-1 text-sm font-normal text-slate-700 sm:inline"> Full-Stack Web Developer </p></div><h4 class="text-xs font-medium font-inter text-slate-500/90"> Mei 2021 - Aug 2022 </h4></div><p class="mt-2 text-sm font-normal font-inter text-slate-700"> An IT company that has collaborated with many clients for various needs such as Company Profile, E-Commerce, E-Auction, E-Recruitment, Warehouse Applications, CRM, CMS, Marketplace and internal company needs. </p><ul class="text-sm font-normal text-white list-disc font-inter"><li class="text-slate-700"> Worked with a team in Indonesian Ministry of Investment Projects called Online Single Submission (OSS). </li><li class="text-slate-700"> Contributed and Improved to several services such as Revocation, Reporting, Scheduling, and LKPM (Investment Activity Report). </li><li class="text-slate-700"> Participated in agile development processes, including daily stand-ups, sprint planning, and retrospectives, to ensure that the team was meeting project goals and deadlines. </li></ul><p class="inline-block mt-2 text-sm font-medium font-inter text-slate-700"> Skills: <span class="inline-block font-normal text-slate-700"> TypeScript <img${ssrRenderAttr("src", _imports_0)} class="inline w-5"> Vue <img${ssrRenderAttr("src", _imports_0)} class="inline w-5"> Nuxt <img${ssrRenderAttr("src", _imports_0)} class="inline w-5"> Express <img${ssrRenderAttr("src", _imports_0)} class="inline w-5"> PostgreSQL </span></p></div></div><hr class="mt-5"></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Work.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-5" }, _attrs))}><div class="pb-5 text-xl font-light font-inter text-slate-500/90"> Projects </div><div class="grid grid-cols-1 gap-4"><div class="flex flex-col"><div class="flex justify-between text-sm font-inter"><div class="flex flex-row items-baseline"><a class="font-medium border-b border-dashed cursor-pointer font-inter text-slate-800 border-slate-500/90" href="https://github.com/rizzra26/discord-clone" target="_blank"> Ngandikan - Team Chat Application<span class="hidden sm:inline">,</span></a><p class="hidden ml-1 text-sm font-normal text-slate-700 sm:inline"> Indie Project </p></div><h4 class="text-xs font-medium font-inter text-slate-500/90"> Sep 2023 - Present </h4></div><p class="mt-2 text-sm font-normal font-inter text-slate-700"> A Discord Clone Application built with Next to learning how to create an end-to-end fullstack and real-time, all with servers, channels, video calls, audio calls, editing and deleting messages as well as member roles. </p><p class="inline-block mt-2 text-sm font-medium font-inter text-slate-700"> Skills: <span class="inline-block font-normal text-slate-700"> TypeScript <img${ssrRenderAttr("src", _imports_0)} class="inline w-5"> Socket.io <img${ssrRenderAttr("src", _imports_0)} class="inline w-5"> Next <img${ssrRenderAttr("src", _imports_0)} class="inline w-5"> MySQL <img${ssrRenderAttr("src", _imports_0)} class="inline w-5"> Prisma </span></p></div><div class="flex flex-col"><div class="flex justify-between text-sm font-inter"><div class="flex flex-row items-baseline"><a class="font-medium border-b border-dashed cursor-pointer font-inter text-slate-800 border-slate-500/90" href="https://github.com/rizzra26/topup-store" target="_blank"> Topup Store<span class="hidden sm:inline">,</span></a><p class="hidden ml-1 text-sm font-normal text-slate-700 sm:inline"> Indie Project </p></div><h4 class="text-xs font-medium font-inter text-slate-500/90"> Sep 2023 - Present </h4></div><p class="mt-2 text-sm font-normal font-inter text-slate-700"> Games Topup Store Website built using MERN Stack by implementing Atomic Design with Story Book </p><p class="inline-block mt-2 text-sm font-medium font-inter text-slate-700"> Skills: <span class="inline-block font-normal text-slate-700"> TypeScript <img${ssrRenderAttr("src", _imports_0)} class="inline w-5"> StoryBook <img${ssrRenderAttr("src", _imports_0)} class="inline w-5"> Next <img${ssrRenderAttr("src", _imports_0)} class="inline w-5"> Express <img${ssrRenderAttr("src", _imports_0)} class="inline w-5"> MongoDB </span></p></div></div><hr class="mt-5"></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-5 mb-5" }, _attrs))}><div class="pb-5 text-xl font-light font-inter text-slate-500/90"> Certificates </div><div class="grid grid-cols-1 gap-4"><div><div class="flex justify-between text-sm font-inter"><div class="flex flex-row items-baseline"><a class="font-medium border-b border-dashed cursor-pointer font-inter text-slate-800 border-slate-500/90" href="https://www.fazztrack.com/" target="_blank"> Fazztrack<span class="hidden sm:inline">,</span></a><p class="hidden ml-1 text-sm font-normal text-slate-700 sm:inline"> Full-Stack Mobile Developer </p></div><h4 class="text-xs font-medium font-inter text-slate-500/90"> Mar 2021 </h4></div><p class="mt-2 text-sm font-normal font-inter text-slate-700"> Obtained a certificate in Full-Stack Mobile Developer (React Native) after completing the coding bootcamp intensive at Fazztrack </p></div><div><div class="flex justify-between text-sm font-inter"><div class="flex flex-row items-baseline"><a class="font-medium border-b border-dashed cursor-pointer font-inter text-slate-800 border-slate-500/90" href="https://bnsp.go.id/" target="_blank"> Badan Nasional Sertifikasi Profesi (BNSP)<span class="hidden sm:inline">,</span></a><p class="hidden ml-1 text-sm font-normal text-slate-700 sm:inline"> Software Engineer </p></div><h4 class="text-xs font-medium font-inter text-slate-500/90"> Apr 2020 </h4></div><p class="mt-2 text-sm font-normal font-inter text-slate-700"> Participated and passed the LSP (Indonesia Goverment Professional Certification Institute) compentency test at KKNI Level II Software Engineering Skills Competence </p></div></div><hr class="mt-5"></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Certificates.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-5 mb-5" }, _attrs))}><div class="pb-5 text-xl font-light font-inter text-slate-500/90"> Education </div><div class="grid grid-cols-1 gap-4"><div><div class="flex justify-between text-sm font-inter"><div class="flex flex-row items-baseline"><a class="font-medium border-b border-dashed cursor-pointer font-inter text-slate-800 border-slate-500/90" href="https://www.fazztrack.com/" target="_blank"> Fazztrack Coding Bootcamp<span class="hidden sm:inline">,</span></a><p class="hidden ml-1 text-sm font-normal text-slate-700 sm:inline"> Full-Stack Mobile Developer </p></div><h4 class="text-xs font-medium font-inter text-slate-500/90"> Dec 2020 - Mar 2021 </h4></div><p class="mt-2 text-sm font-normal font-inter text-slate-700"> After graduating from high school, I felt that I didn&#39;t have enough programming skills to apply for a job, so I decided to join a coding bootcamp for 3 months at Fazztrack. </p><ul class="text-sm font-normal text-white list-disc font-inter"><li class="text-slate-700"> Learning web development using React JS and mobile development using React Native </li><li class="text-slate-700"> During my study at Fazztrack, I have learned JavaScript ES6, Node.js, Express.js, API, React JS, React Native, Redux, MySQL, Flowchart, ERD, Kanban (SCRUM), Version Control with Git, and Deployment. </li><li class="text-slate-700"> Build applications such as <a class="border-b border-dashed cursor-pointer border-slate-500/90" target="_blank" href="https://github.com/rizzra26/tickitz-mobile"> Tickitz </a>, <a class="border-b border-dashed cursor-pointer border-slate-500/90" target="_blank" href="https://github.com/rizzra26/walletchip-mobile-official"> Walletchip </a>, <a class="border-b border-dashed cursor-pointer border-slate-500/90" target="_blank" href="https://github.com/rizzra26/dynamessage-app"> Dynamessage </a></li></ul></div><div><div class="flex justify-between text-sm font-inter"><div class="flex flex-row items-baseline"><a class="font-medium border-b border-dashed cursor-pointer font-inter text-slate-800 border-slate-500/90" href="https://smkn12jakarta.sch.id/" target="_blank"> SMK Negeri 12 Jakarta<span class="hidden sm:inline">,</span></a><p class="hidden ml-1 text-sm font-normal text-slate-700 sm:inline"> Computer Software Engineering </p></div><h4 class="text-xs font-medium font-inter text-slate-500/90"> Apr 2017 - May 2020 </h4></div><p class="mt-2 text-sm font-normal font-inter text-slate-700"> It was at this time that I first learned programming, I&#39;m learning Software Development Methodology and the concept of Object-Oriented Programming using Java Programming Language, also learned the basic of Web Development like HTML, CSS JavaScript, PHP, MVC, MySQL. </p><ul class="text-sm font-normal text-white list-disc font-inter"><li class="text-slate-700"> Internship as IT Support at <a class="border-b border-dashed cursor-pointer border-slate-500/90" href="https://www.linkedin.com/company/daya-radar-utama-pt/" target="_blank">PT Daya Radar Utama</a> for 3 months </li><li class="text-slate-700"> Participated and achieve 2nd place in Lomba Keterampilan Siswa (LKS) Web Technology. </li><li class="text-slate-700"> Joined an extracurricular club called the IT Club and served as head of the Software Development division. </li></ul></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Education.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    class: "no-print",
    target: "_blank",
    href: "https://tailwindcss.com/"
  }, _attrs))}><svg class="mt-12" width="170" height="30" viewBox="0 0 170 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="168" height="28" rx="5" fill="#101926" stroke="#20314A" stroke-width="0.5"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M17.0002 10C14.6 10 13.1002 11.1112 12.4999 13.3336C13.4 12.2224 14.4501 11.8058 15.65 12.0834C16.3346 12.2418 16.8242 12.7017 17.3656 13.211C18.2481 14.0403 19.2695 15 21.5001 15C23.8999 15 25.4 13.8888 26 11.6668C25.1002 12.778 24.0502 13.1946 22.8503 12.9166C22.1653 12.7582 21.6757 12.2983 21.1343 11.7893C20.2518 10.9594 19.2307 10 17.0002 10ZM12.4999 15C10.1001 15 8.59996 16.1112 8 18.3336C8.90012 17.2224 9.95015 16.8058 11.1497 17.0834C11.8347 17.2418 12.3243 17.7017 12.8657 18.211C13.7482 19.0403 14.7693 20 17.0002 20C19.4 20 20.9001 18.8891 21.5001 16.6668C20.6 17.778 19.5499 18.1946 18.35 17.9169C17.6654 17.7582 17.1758 17.2983 16.6344 16.7893C15.7519 15.96 14.7305 15 12.4999 15V15Z" fill="#38BDF8"></path><path d="M32.852 19V10.6H34.352L37.196 16.192L40.028 10.6H41.528V19H40.256V12.796L37.688 17.8H36.704L34.124 12.808V19H32.852ZM45.2028 19.144C44.6988 19.144 44.2828 19.06 43.9548 18.892C43.6268 18.724 43.3828 18.504 43.2228 18.232C43.0628 17.952 42.9828 17.648 42.9828 17.32C42.9828 16.744 43.2068 16.288 43.6548 15.952C44.1028 15.616 44.7428 15.448 45.5748 15.448H47.1348V15.34C47.1348 14.876 47.0068 14.528 46.7508 14.296C46.5028 14.064 46.1788 13.948 45.7788 13.948C45.4268 13.948 45.1188 14.036 44.8548 14.212C44.5988 14.38 44.4428 14.632 44.3868 14.968H43.1148C43.1548 14.536 43.2988 14.168 43.5468 13.864C43.8028 13.552 44.1228 13.316 44.5068 13.156C44.8988 12.988 45.3268 12.904 45.7908 12.904C46.6228 12.904 47.2668 13.124 47.7228 13.564C48.1788 13.996 48.4068 14.588 48.4068 15.34V19H47.3028L47.1948 17.98C47.0268 18.308 46.7828 18.584 46.4628 18.808C46.1428 19.032 45.7228 19.144 45.2028 19.144ZM45.4548 18.112C45.7988 18.112 46.0868 18.032 46.3188 17.872C46.5588 17.704 46.7428 17.484 46.8708 17.212C47.0068 16.94 47.0908 16.64 47.1228 16.312H45.7068C45.2028 16.312 44.8428 16.4 44.6268 16.576C44.4188 16.752 44.3148 16.972 44.3148 17.236C44.3148 17.508 44.4148 17.724 44.6148 17.884C44.8228 18.036 45.1028 18.112 45.4548 18.112ZM52.6019 19.144C52.0259 19.144 51.5179 19.008 51.0779 18.736C50.6379 18.464 50.2939 18.092 50.0459 17.62C49.7979 17.148 49.6739 16.612 49.6739 16.012C49.6739 15.412 49.7979 14.88 50.0459 14.416C50.2939 13.944 50.6379 13.576 51.0779 13.312C51.5259 13.04 52.0379 12.904 52.6139 12.904C53.0859 12.904 53.4979 12.996 53.8499 13.18C54.2099 13.364 54.4899 13.624 54.6899 13.96V10.36H55.9619V19H54.8219L54.6899 18.076C54.4979 18.356 54.2339 18.604 53.8979 18.82C53.5619 19.036 53.1299 19.144 52.6019 19.144ZM52.8299 18.04C53.3739 18.04 53.8179 17.852 54.1619 17.476C54.5139 17.1 54.6899 16.616 54.6899 16.024C54.6899 15.424 54.5139 14.94 54.1619 14.572C53.8179 14.196 53.3739 14.008 52.8299 14.008C52.2859 14.008 51.8379 14.196 51.4859 14.572C51.1339 14.94 50.9579 15.424 50.9579 16.024C50.9579 16.416 51.0379 16.764 51.1979 17.068C51.3579 17.372 51.5779 17.612 51.8579 17.788C52.1459 17.956 52.4699 18.04 52.8299 18.04ZM60.3497 19.144C59.7657 19.144 59.2457 19.016 58.7897 18.76C58.3417 18.496 57.9897 18.132 57.7337 17.668C57.4777 17.204 57.3497 16.664 57.3497 16.048C57.3497 15.424 57.4737 14.876 57.7217 14.404C57.9777 13.932 58.3297 13.564 58.7777 13.3C59.2337 13.036 59.7617 12.904 60.3617 12.904C60.9457 12.904 61.4537 13.036 61.8857 13.3C62.3177 13.556 62.6537 13.9 62.8937 14.332C63.1337 14.764 63.2537 15.24 63.2537 15.76C63.2537 15.84 63.2497 15.928 63.2417 16.024C63.2417 16.112 63.2377 16.212 63.2297 16.324H58.5977C58.6377 16.9 58.8257 17.34 59.1617 17.644C59.5057 17.94 59.9017 18.088 60.3497 18.088C60.7097 18.088 61.0097 18.008 61.2497 17.848C61.4977 17.68 61.6817 17.456 61.8017 17.176H63.0737C62.9137 17.736 62.5937 18.204 62.1137 18.58C61.6417 18.956 61.0537 19.144 60.3497 19.144ZM60.3497 13.948C59.9257 13.948 59.5497 14.076 59.2217 14.332C58.8937 14.58 58.6937 14.956 58.6217 15.46H61.9817C61.9577 14.996 61.7937 14.628 61.4897 14.356C61.1857 14.084 60.8057 13.948 60.3497 13.948ZM68.785 19L67.033 13.048H68.305L69.457 17.536L70.753 13.048H72.169L73.465 17.536L74.617 13.048H75.889L74.137 19H72.829L71.461 14.32L70.093 19H68.785ZM77.6568 11.92C77.4168 11.92 77.2168 11.848 77.0568 11.704C76.9048 11.552 76.8288 11.364 76.8288 11.14C76.8288 10.916 76.9048 10.732 77.0568 10.588C77.2168 10.436 77.4168 10.36 77.6568 10.36C77.8968 10.36 78.0928 10.436 78.2448 10.588C78.4048 10.732 78.4848 10.916 78.4848 11.14C78.4848 11.364 78.4048 11.552 78.2448 11.704C78.0928 11.848 77.8968 11.92 77.6568 11.92ZM77.0208 19V13.048H78.2928V19H77.0208ZM82.468 19C81.884 19 81.42 18.86 81.076 18.58C80.732 18.292 80.56 17.784 80.56 17.056V14.116H79.54V13.048H80.56L80.716 11.536H81.832V13.048H83.512V14.116H81.832V17.056C81.832 17.384 81.9 17.612 82.036 17.74C82.18 17.86 82.424 17.92 82.768 17.92H83.452V19H82.468ZM84.8235 19V10.36H86.0955V14.008C86.2955 13.664 86.5715 13.396 86.9235 13.204C87.2835 13.004 87.6795 12.904 88.1115 12.904C88.8235 12.904 89.3835 13.128 89.7915 13.576C90.1995 14.024 90.4035 14.692 90.4035 15.58V19H89.1435V15.712C89.1435 14.56 88.6835 13.984 87.7635 13.984C87.2835 13.984 86.8835 14.152 86.5635 14.488C86.2515 14.824 86.0955 15.304 86.0955 15.928V19H84.8235Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M100.09 14.0462H98.525V16.953C98.525 17.7283 99.0551 17.7161 100.09 17.6676V18.8426C97.9946 19.0848 97.1614 18.5277 97.1614 16.953V14.0462H96V12.7864H97.1614V11.1597L98.525 10.7719V12.7864H100.09V14.0462ZM106.057 12.7864H107.42V18.8426H106.057V17.9706C105.577 18.6122 104.833 19 103.848 19C102.131 19 100.705 17.6072 100.705 15.8143C100.705 14.0099 102.131 12.6289 103.848 12.6289C104.833 12.6289 105.577 13.0164 106.057 13.6465V12.7864V12.7864ZM104.063 17.7524C105.199 17.7524 106.057 16.9408 106.057 15.8143C106.057 14.6878 105.199 13.8765 104.063 13.8765C102.927 13.8765 102.068 14.6881 102.068 15.8143C102.068 16.9408 102.927 17.7524 104.063 17.7524ZM109.693 11.878C109.213 11.878 108.822 11.4906 108.822 11.0423C108.823 10.8202 108.915 10.6075 109.079 10.4509C109.242 10.2943 109.463 10.2065 109.693 10.2066C109.923 10.2064 110.144 10.2942 110.307 10.4508C110.47 10.6074 110.563 10.8201 110.564 11.0423C110.564 11.4902 110.173 11.878 109.693 11.878ZM109.011 18.8426V12.7864H110.375V18.8426H109.011ZM111.953 18.8426V10H113.316V18.8422H111.953V18.8426ZM122.166 12.7864H123.605L121.623 18.8426H120.285L118.972 14.7608L117.646 18.8426H116.308L114.326 12.7864H115.765L116.99 16.9649L118.315 12.7864H119.616L120.928 16.9649L122.166 12.7864V12.7864ZM125.296 11.878C124.817 11.878 124.425 11.4906 124.425 11.0423C124.426 10.8201 124.519 10.6074 124.682 10.4508C124.845 10.2942 125.066 10.2064 125.296 10.2066C125.527 10.2064 125.748 10.2942 125.911 10.4508C126.074 10.6074 126.166 10.8201 126.167 11.0423C126.167 11.4902 125.776 11.878 125.296 11.878ZM124.615 18.8426V12.7864H125.978V18.8426H124.615V18.8426ZM130.876 12.6289C132.29 12.6289 133.3 13.5494 133.3 15.1241V18.8422H131.937V15.2572C131.937 14.3366 131.381 13.8524 130.523 13.8524C129.627 13.8524 128.92 14.3611 128.92 15.5965V18.8426H127.556V12.7864H128.92V13.5617C129.336 12.9319 130.018 12.6289 130.876 12.6289V12.6289ZM139.764 10.3641H141.127V18.8422H139.764V17.9702C139.284 18.6122 138.539 18.9997 137.555 18.9997C135.838 18.9997 134.411 17.6068 134.411 15.8139C134.411 14.0095 135.838 12.6286 137.555 12.6286C138.539 12.6286 139.284 13.0161 139.764 13.6461V10.3641V10.3641ZM137.769 17.7524C138.905 17.7524 139.764 16.9408 139.764 15.8143C139.764 14.6878 138.905 13.8765 137.769 13.8765C136.633 13.8765 135.774 14.6881 135.774 15.8143C135.774 16.9408 136.633 17.7524 137.769 17.7524ZM145.697 19C143.791 19 142.364 17.6072 142.364 15.8143C142.364 14.0099 143.791 12.6289 145.697 12.6289C146.934 12.6289 148.007 13.2464 148.512 14.1914L147.338 14.8456C147.06 14.2762 146.442 13.9128 145.684 13.9128C144.574 13.9128 143.728 14.7244 143.728 15.8143C143.728 16.9045 144.574 17.7161 145.684 17.7161C146.442 17.7161 147.06 17.3405 147.363 16.7833L148.537 17.4253C148.007 18.3821 146.934 18.9997 145.697 18.9997V19ZM150.784 14.4578C150.784 15.5602 154.18 14.8938 154.18 17.1349C154.18 18.3462 153.082 19 151.719 19C150.456 19 149.547 18.4547 149.143 17.5827L150.317 16.9289C150.519 17.4738 151.024 17.8009 151.719 17.8009C152.325 17.8009 152.792 17.6072 152.792 17.1223C152.792 16.0447 149.396 16.6503 149.396 14.4822C149.396 13.3435 150.418 12.6289 151.706 12.6289C152.741 12.6289 153.6 13.0893 154.042 13.8887L152.893 14.5063C152.665 14.034 152.223 13.8158 151.706 13.8158C151.214 13.8158 150.784 14.0218 150.784 14.4578V14.4578ZM156.604 14.4578C156.604 15.5602 160 14.8938 160 17.1349C160 18.3462 158.902 19 157.538 19C156.276 19 155.367 18.4547 154.963 17.5827L156.137 16.9289C156.339 17.4738 156.844 17.8009 157.538 17.8009C158.144 17.8009 158.611 17.6072 158.611 17.1223C158.611 16.0447 155.216 16.6503 155.216 14.4822C155.216 13.3435 156.238 12.6289 157.526 12.6289C158.561 12.6289 159.419 13.0893 159.861 13.8887L158.712 14.5063C158.485 14.034 158.043 13.8158 157.526 13.8158C157.033 13.8158 156.604 14.0218 156.604 14.4578V14.4578Z" fill="white"></path></svg></a>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MadeWithTailwind.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Me = __nuxt_component_0$1;
  const _component_AboutMe = _sfc_main$b;
  const _component_Skills = __nuxt_component_2;
  const _component_Languages = __nuxt_component_3;
  const _component_Work = __nuxt_component_4;
  const _component_Projects = __nuxt_component_5;
  const _component_Certificates = __nuxt_component_6;
  const _component_Education = __nuxt_component_7;
  const _component_MadeWithTailwind = __nuxt_component_8;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-screen lg:flex-row flex-col" }, _attrs))}><div class="lg:w-[65%] w-full bg-cover bg-effect text-slate-950 px-8 sm:px-16">`);
  _push(ssrRenderComponent(_component_Me, null, null, _parent));
  _push(`<div class="hidden print:inline">`);
  _push(ssrRenderComponent(_component_AboutMe, null, null, _parent));
  _push(ssrRenderComponent(_component_Skills, null, null, _parent));
  _push(ssrRenderComponent(_component_Languages, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Work, null, null, _parent));
  _push(ssrRenderComponent(_component_Projects, null, null, _parent));
  _push(ssrRenderComponent(_component_Certificates, null, null, _parent));
  _push(ssrRenderComponent(_component_Education, null, null, _parent));
  _push(`</div><div class="lg:w-[45%] no-print w-full bg-cover bg-[url(/images/right-bg.jpg)] min-h-full h-full text-white px-8">`);
  _push(ssrRenderComponent(_component_AboutMe, null, null, _parent));
  _push(ssrRenderComponent(_component_Skills, null, null, _parent));
  _push(ssrRenderComponent(_component_Languages, null, null, _parent));
  _push(ssrRenderComponent(_component_MadeWithTailwind, null, null, _parent));
  _push(`<br><br></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-e5255d4e.mjs.map
