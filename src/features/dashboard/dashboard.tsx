import { Dialog, Transition } from '@headlessui/react';
import {
  AcademicCapIcon,
  EllipsisVerticalIcon,
} from '@heroicons/react/20/solid';
import { useLocalStorage } from '@react-hooks-library/core';
import { Fragment, useState } from 'react';

const profile = {
  name: 'Ricardo Cooper',
  email: 'ricardo.cooper@example.com',
  avatar:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  backgroundImage:
    'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  fields: [
    ['Phone', '(555) 123-4567'],
    ['Email', 'ricardocooper@example.com'],
    ['Title', 'Senior Front-End Developer'],
    ['Team', 'Product Development'],
    ['Location', 'San Francisco'],
    ['Sits', 'Oasis, 4th floor'],
    ['Salary', '$145,000'],
    ['Birthday', 'June 8, 1990'],
  ],
};

const locations = [
  {
    name: 'Regular Courses',
    people: [
      {
        name: 'Foundation of Education',
        code: 'FE123',
        email: 'lindsay.walton@example.com',
        type: 'REGULAR',
      },
      {
        name: 'Inclusive Education',
        code: 'IE123',
        email: 'courtney.henry@example.com',
        type: 'REGULAR',
      },
      {
        name: 'Supporting Teaching In Schools',
        code: 'STS435',
        email: 'lindsay.walton@example.com',
        type: 'REGULAR',
      },
      {
        name: 'African Studies',
        code: 'AS638',
        email: 'courtney.henry@example.com',
        type: 'REGULAR',
      },

      {
        name: 'Introduction to Algebra',
        code: 'IA768',
        email: 'lindsay.walton@example.com',
        type: 'REGULAR',
      },
    ],
  },
  // More people...
];

const electives = [
  {
    name: 'Elective Courses',
    people: [
      {
        name: 'Introduction to language and literacy',
        code: 'ILI767',
        email: 'lindsay.walton@example.com',
        type: 'ELECTIVE',
      },
      {
        name: 'Communication skills',
        code: 'CS564',
        email: 'courtney.henry@example.com',
        type: 'ELECTIVE',
      },
    ],
  },
  // More people...
];

const projects = [
  {
    name: 'Register Course',
    initials: 'GA',
    href: '#',
    members: 16,
    bgColor: 'bg-pink-600',
  },
  {
    name: 'Academic Calender',
    initials: 'CD',
    href: '#',
    members: 12,
    bgColor: 'bg-purple-600',
  },
  {
    name: 'View Courses',
    initials: 'T',
    href: '#',
    members: 16,
    bgColor: 'bg-yellow-500',
  },
  {
    name: 'Manage Timetable',
    initials: 'RC',
    href: '#',
    members: 8,
    bgColor: 'bg-green-500',
  },
];

const tabs = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Grades', href: '#', current: false },
  { name: 'Profile', href: '#', current: false },
  { name: 'Settings', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  const [value, setValue] = useLocalStorage('auth-token');

  const user = {
    name:
      value?.data?.data?.user?.firstname +
      ' ' +
      value?.data?.data?.user?.lastname,
    index: value?.data?.data?.user?.studentId,
  };

  console.log(user);

  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-60 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[1000px] sm:p-6'>
                  <div>
                    {/* <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100'>
                      <CheckIcon
                        className='h-6 w-6 text-green-600'
                        aria-hidden='true'
                      />
                    </div> */}
                    <div className='mt-3  sm:mt-5'>
                      {/* <Dialog.Title
                        as='h3'
                        className='text-base font-semibold leading-6 text-gray-900'
                      >
                        Payment successful
                      </Dialog.Title>
                      <div className='mt-2'>
                        <p className='text-sm text-gray-500'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consequatur amet labore.
                        </p>
                      </div> */}

                      <div className='px-4 sm:px-6 lg:px-8'>
                        <div className='sm:flex sm:items-center'>
                          <div className='sm:flex-auto'>
                            <h1 className='text-xl font-semibold leading-6 text-gray-900'>
                              Course Registration
                            </h1>
                            <p className='mt-2 text-sm text-gray-700'>
                              A list of all the users in your account including
                              their name, title, email and role.
                            </p>
                          </div>
                          {/* <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
                            <button
                              type='button'
                              className='block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                            >
                              Add user
                            </button>
                          </div> */}
                        </div>
                        <div className='mt-8 flow-root'>
                          <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                            <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
                              <table className='min-w-full'>
                                <thead className='bg-white'>
                                  <tr>
                                    {/* <th scope='col' className='relative px-7 sm:w-12 sm:px-6'>
                        <input
                          type='checkbox'
                          className=' radio absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-[#F97A2E] focus:ring-[#F97A2E]'
                          ref={checkbox as React.RefObject<HTMLInputElement>}
                          checked={checked}
                          onChange={toggleAll}
                        />
                      </th> */}
                                    <th
                                      scope='col'
                                      className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3'
                                    >
                                      Name
                                    </th>
                                    <th
                                      scope='col'
                                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                    >
                                      Code
                                    </th>

                                    <th
                                      scope='col'
                                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                    >
                                      Type
                                    </th>
                                    <th
                                      scope='col'
                                      className='relative py-3.5 pl-3 pr-4 sm:pr-3'
                                    >
                                      <span className='sr-only'>Edit</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className='bg-white'>
                                  {locations.map((location) => (
                                    <Fragment key={location.name}>
                                      <tr className='border-t border-gray-200'>
                                        <th
                                          colSpan={5}
                                          scope='colgroup'
                                          className='bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3'
                                        >
                                          {location.name}
                                        </th>
                                      </tr>
                                      {location.people.map(
                                        (person, personIdx) => (
                                          <tr
                                            key={person.email}
                                            className={classNames(
                                              personIdx === 0
                                                ? 'border-gray-300'
                                                : 'border-gray-200',
                                              'border-t'
                                            )}
                                          >
                                            <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3'>
                                              {person.name}
                                            </td>
                                            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                              {person.code}
                                            </td>

                                            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                              {person.type}
                                            </td>
                                          </tr>
                                        )
                                      )}
                                    </Fragment>
                                  ))}
                                  {electives.map((location) => (
                                    <Fragment key={location.name}>
                                      <tr className='border-t border-gray-200'>
                                        <th
                                          colSpan={5}
                                          scope='colgroup'
                                          className='bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3'
                                        >
                                          {location.name}
                                        </th>
                                      </tr>
                                      {location.people.map(
                                        (person, personIdx) => (
                                          <tr
                                            key={person.email}
                                            className={classNames(
                                              personIdx === 0
                                                ? 'border-gray-300'
                                                : 'border-gray-200',
                                              'border-t'
                                            )}
                                          >
                                            {/* <td className='relative px-7 sm:w-12 sm:px-6'>
                                          {selectedPeople.includes(person) && (
                                            <div className='absolute inset-y-0 left-0 w-0.5 bg-[#F97A2E]' />
                                          )}
                                          <input
                                            type='checkbox'
                                            className='radio'
                                            value={person.email}
                                            checked={selectedPeople.includes(person)}
                                            onChange={(e) =>
                                              setSelectedPeople(
                                                e.target.checked
                                                  ? [...selectedPeople, person]
                                                  : selectedPeople.filter((p) => p !== person)
                                              )
                                            }
                                          />
                                        </td> */}
                                            <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3'>
                                              {person.name}
                                            </td>
                                            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                              {person.code}
                                            </td>

                                            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                              {person.type}
                                            </td>
                                            <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3'>
                                              <a
                                                href='#'
                                                className='text-indigo-600 hover:text-indigo-900'
                                              >
                                                Register
                                                <span className='sr-only'>
                                                  , {person.name}
                                                </span>
                                              </a>
                                            </td>
                                          </tr>
                                        )
                                      )}
                                    </Fragment>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-5 sm:mt-6'>
                    <button
                      type='button'
                      className='inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                      onClick={() => setOpen(false)}
                    >
                      Register
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div>
        <img
          className='h-32 w-full object-cover lg:h-48'
          src={profile.backgroundImage}
          alt=''
        />
      </div>
      <div className='mx-auto w-9/12 px-4 sm:px-6 lg:px-8'>
        <div className='-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5'>
          <div className='flex'>
            <img
              className='h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32'
              src={profile.avatar}
              alt=''
            />
          </div>
          <div className='mt-6  sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
            <div className='mt-6 min-w-0 flex-1 sm:hidden md:block'>
              <h1 className='truncate text-2xl font-bold text-gray-900'>
                {user.name}
              </h1>
            </div>
            <div className='mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0'>
              {/* <button
                type='button'
                className='inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
              >
                <UserIcon
                  className='-ml-0.5 mr-1.5 h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
                <span>My profile</span>
              </button> */}
              <button
                onClick={() => setOpen(true)}
                type='button'
                className='inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
              >
                <AcademicCapIcon
                  className='-ml-0.5 mr-1.5 h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
                <span>Register</span>
              </button>
            </div>
          </div>
        </div>
        <div className='mt-6 hidden min-w-0 flex-1 sm:block md:hidden'>
          <h1 className='truncate text-2xl font-bold text-gray-900'>
            {user.name}
          </h1>
        </div>
      </div>
      <div className='mx-auto mt-14 w-9/12 space-y-10 border-b border-gray-200 pb-5 sm:pb-0'>
        <h3 className='text-2xl font-semibold leading-6 text-gray-900'>
          Student: {user.index}
        </h3>
        <div className='mt-3 sm:mt-4'>
          <div className='sm:hidden'>
            <label htmlFor='current-tab' className='sr-only'>
              Select a tab
            </label>
            <select
              id='current-tab'
              name='current-tab'
              className='block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
              defaultValue={tabs.find((tab) => tab.current)?.name}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className='hidden sm:block'>
            <nav className='-mb-px flex space-x-8'>
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <section className='mx-auto mt-14 w-9/12'>
        <div>
          <div className='mb-10'>
            <h2 className=' text-xl font-medium text-gray-500'>
              Welcome, <span className='text-green-500'> {user.name} </span>{' '}
            </h2>
          </div>
          <ul
            role='list'
            className='mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4'
          >
            {projects.map((project) => (
              <li
                key={project.name}
                className='col-span-1 flex rounded-md shadow-sm'
              >
                <div
                  className={classNames(
                    project.bgColor,
                    'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                  )}
                >
                  {project.initials}
                </div>
                <div className='flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white'>
                  <div className='flex-1 truncate px-4 py-2 text-sm'>
                    <a
                      href={project.href}
                      className='font-medium text-gray-900 hover:text-gray-600'
                    >
                      {project.name}
                    </a>
                    <p className='text-gray-500'>{project.members} Members</p>
                  </div>
                  <div className='flex-shrink-0 pr-2'>
                    <button
                      type='button'
                      className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    >
                      <span className='sr-only'>Open options</span>
                      <EllipsisVerticalIcon
                        className='h-5 w-5'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
