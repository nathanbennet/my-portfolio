import { SOCIAL_LINKS, USERNAME } from 'constants/socials';
import Image from 'next/image';
import Link from 'next/link';

import SkillsCard from './Cards/SkillsCard';
import CertificatesCarousel from './CertificatesCarousel';
import Divider from './Divider';
import profileImage from '../../public/assets/images/pages/about-me/profile.png';
//import Workhistory from './workhistory';

import { v4 as uuidv4 } from 'uuid';

const user = {
  name: 'Nathan Bennett',
  role: 'Senior Full Stack Developer',
  imgSrc: profileImage.src,
  bio: `Hello! I'm Nathan Bennett, a highly skilled Senior Full Stack Developer with over 10 years' experience in software development, specializing in creating efficient, scalable web applications. 
  Proficient in a wide range of programming languages, technologies, and cloud services. 
  Proven track record of enhancing the digital presence of numerous businesses. 
  Seeking to leverage my technical skills and proficiency to effectively meet the goals of your team.
  `,
  bio1: `- Developed and optimized multiple web applications, enhancing the efficiency of business operations for various clients.
         - Collaborated closely with project managers and UI/UX designers to ensure high-quality application designs.
         - Participated in numerous code reviews and design discussions, contributing meaningful insights to the development process.

         At OfficeAutoMata, I served as a Senior Full Stack Developer responsible for creating and optimizing various web applications. 
         This entailed architecting efficient database structures, crafting intuitive and interactive user interfaces, and building scalable backend solutions. 
         I also participated in code reviews, and design discussions, and created comprehensive testing suites to ensure software quality. 
         My role involved a high level of collaboration with cross-functional teams, including project managers and UI/UX designers.
  `,
  bio2: `- Implemented and improved various software solutions, leading to significant improvements in client operations.
         - Provided mentorship to a team of junior developers, instilling best web development practices.

         As a Senior Full Stack Developer at Extra Nerds, I was instrumental in delivering cutting-edge software solutions for various projects. 
         My responsibilities included designing and implementing API endpoints, improving the performance of front-end applications, and developing robust server-side logic. 
         I also led a team of junior developers, provided mentorship, and maintained a focus on best practices for web development.
  `,
  bio3: `- Developed, tested, and maintained diverse software applications, catering to a wide range of business needs.

        During my time at TechGenies LLC, I served as a Senior Developer where I developed, tested, and maintained a wide range of software applications. 
        I was pivotal in debugging and optimizing existing systems, reducing downtime, and increasing application efficiency. 
        Furthermore, I was responsible for providing technical guidance during product development stages, facilitating team communication, and ensuring alignment with company goals.
  `,
  bio4: `- Initially worked as a Web Developer, creating dynamic websites optimized for user experience.
         - Later transitioned into a Full Stack Developer role, responsible for the full development cycle of client-server applications.
         
         I started at Check Point Software Technologies as a Web Developer, where I focused on creating and managing dynamic websites. 
         I designed and implemented front-end structures using a variety of technologies and ensured websites were optimized for the best user experience. 
         From April 2014 to July 2017, I transitioned into the role of a Full Stack Developer. Here, I was responsible for all aspects of software development, including designing, developing, and deploying client-server applications.      
  `,
};

const AboutMe = () => {
  const displayBio = () => {
    const linkStyles =
      'blue-900 border-b-[0.22em] border-blue-900 border-x-white_gray border-opacity-50 dark:border-accent_primary dark:border-opacity-60  inline-block h-[1.35em] mr-1';
    return user.bio.split(' ').map((word) => {
      const wordWithSpace = `${word} `;
      /* if (['github', 'projects'].includes(word.toLocaleLowerCase())) {
        if (word.toLocaleLowerCase() === 'github')
          return (
            <Link
              key={uuidv4()}
              href={`${SOCIAL_LINKS.github.website}/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles}
            >
              {wordWithSpace}
            </Link>
          );
        else {
          return (
            <Link
              key={uuidv4()}
              href={`/projects`}
              className={`${linkStyles}  h-[1.51em] pb-[0.1em]`}
            >
              {wordWithSpace}
            </Link>
          );
        }
      } */

      return wordWithSpace;
    });
  };
  const displayBio1 = () => {
    const linkStyles =
      'blue-900 border-b-[0.22em] border-blue-900 border-x-white_gray border-opacity-50 dark:border-accent_primary dark:border-opacity-60  inline-block h-[1.35em] mr-1';
    return user.bio1.split(' ').map((word) => {
      const wordWithSpace = `${word} `;
 
      return wordWithSpace;
    });
  };
  const displayBio2 = () => {
    const linkStyles =
      'blue-900 border-b-[0.22em] border-blue-900 border-x-white_gray border-opacity-50 dark:border-accent_primary dark:border-opacity-60  inline-block h-[1.35em] mr-1';
    return user.bio2.split(' ').map((word) => {
      const wordWithSpace = `${word} `;
 
      return wordWithSpace;
    });
  };
  const displayBio3 = () => {
    const linkStyles =
      'blue-900 border-b-[0.22em] border-blue-900 border-x-white_gray border-opacity-50 dark:border-accent_primary dark:border-opacity-60  inline-block h-[1.35em] mr-1';
    return user.bio3.split(' ').map((word) => {
      const wordWithSpace = `${word} `;
 
      return wordWithSpace;
    });
  };
  const displayBio4 = () => {
    const linkStyles =
      'blue-900 border-b-[0.22em] border-blue-900 border-x-white_gray border-opacity-50 dark:border-accent_primary dark:border-opacity-60  inline-block h-[1.35em] mr-1';
    return user.bio4.split(' ').map((word) => {
      const wordWithSpace = `${word} `;
 
      return wordWithSpace;
    });
  };

  return (
    <div className="custom-scrollbar to-add-blur mb-auto h-full overflow-auto bg-primary_90 dark:bg-primary_10">
      <div className="my-6 px-5 sm:pb-0">
        <div className="flex flex-col sm:flex-row-reverse sm:items-start sm:justify-center">
          <div className="sm:flex sm:flex-col sm:items-center ">
            <div className="rounded-xl shadow-sm shadow-gray-600 dark:shadow-black sm:h-[75%] sm:w-[75%]">
              <Image
                className="text-centers max-w-[100%] rounded-xl object-cover"
                src={user.imgSrc}
                alt="profile"
                width={100}
                height={100}
                sizes="100vw"
                style={{
                  maxWidth: 'inherit',
                  maxHeight: 'inherit',
                }}
              />
            </div>
            <div className="text-lg leading-6 sm:h-[75%] sm:w-[75%]">
              <h2 className="mt-2 font-semibold">{user.name}</h2>
              <h3 className="mb-2 font-bold text-blue-800 dark:text-accent_primary">
                {user.role}
              </h3>
            </div>
          </div>

          <div className="sm:w-[70%]">
            <div className="mt-10 rounded-xl bg-white_gray p-6 text-lg  shadow-sm shadow-gray-600 dark:bg-primary_20 dark:shadow-black sm:m-10 sm:mt-0">
              <h1 className="mb-2 text-2xl font-bold dark:text-white_gray">
                About me
              </h1>
              <p className="max-w-[1280px] whitespace-pre-line leading-snug">
                {displayBio()}
              </p>
            </div>
            <SkillsCard />
          </div>
        </div>
        <div className="mt-10">
          <Divider name="Work History" />
        </div>
        <div className="sm:w-[100%]">
          <div className="mt-10 rounded-xl bg-white_gray p-6 text-lg  shadow-sm shadow-gray-600 dark:bg-primary_20 dark:shadow-black sm:m-10 sm:mt-0">
            <h1 className="mb-2 text-2xl font-bold dark:text-white_gray">
              Full Stack Developer
            </h1>
            <h2 className="mb-2 text-1xl font-bold dark:text-white_gray">
              Upwork, Oct 2020 – Jan 2023
            </h2>
            <p className="max-w-[1280px] whitespace-pre-line leading-snug">
              {displayBio1()}
            </p>
          </div>
          <div className="mt-10 rounded-xl bg-white_gray p-6 text-lg  shadow-sm shadow-gray-600 dark:bg-primary_20 dark:shadow-black sm:m-10 sm:mt-0">
            <h1 className="mb-2 text-2xl font-bold dark:text-white_gray">
              Sr. Full Stack Developer
            </h1>
            <h2 className="mb-2 text-1xl font-bold dark:text-white_gray">
              Marvin R. Clement, C.P.A. (Rockdale, Texas), Aug 2017 - Apr 2021
            </h2>
            <p className="max-w-[1280px] whitespace-pre-line leading-snug">
              {displayBio2()}
            </p>
          </div>
          <div className="mt-10 rounded-xl bg-white_gray p-6 text-lg  shadow-sm shadow-gray-600 dark:bg-primary_20 dark:shadow-black sm:m-10 sm:mt-0">
            <h1 className="mb-2 text-2xl font-bold dark:text-white_gray">
              Full Stack Developer
            </h1>
            <h2 className="mb-2 text-1xl font-bold dark:text-white_gray">
              Sparkfish (Addison, Texas), June 2013 - Aug 2017
            </h2>
            <p className="max-w-[1280px] whitespace-pre-line leading-snug">
              {displayBio3()}
            </p>
          </div>
          <div className="mt-10 rounded-xl bg-white_gray p-6 text-lg  shadow-sm shadow-gray-600 dark:bg-primary_20 dark:shadow-black sm:m-10 sm:mt-0">
            <h1 className="mb-2 text-2xl font-bold dark:text-white_gray">
              Web Developer
            </h1>
            <h2 className="mb-2 text-1xl font-bold dark:text-white_gray">
              Austin Software® (Austin, Texas), Mar 2011 - Jun 2013
            </h2>
            <p className="max-w-[1280px] whitespace-pre-line leading-snug">
              {displayBio4()}
            </p>
          </div>
        </div>
        <div className="mt-10">
          {/* <Divider name="Certificates" /> */}
        </div>
        <div className=" mt-2 flex justify-center">
          <div className="w-[90%] sm:w-[40%] ">
            <CertificatesCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
