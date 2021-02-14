import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Post } from '../../../mobx/Post';

export default observer(function PostHeader({ post }: { post: Post }) {
  return (
    <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Class 5 Homework</h1>
        <p className="mt-2 text-sm text-gray-500">Due on March 3rd, 2021</p>
      </div>
      {/*<div className="mt-4 flex space-x-3 md:mt-0">*/}
      {/*  <button*/}
      {/*    type="button"*/}
      {/*    className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"*/}
      {/*  >*/}
      {/*    /!* Heroicon name: solid/pencil *!/*/}
      {/*    <svg*/}
      {/*      className="-ml-1 mr-2 h-5 w-5 text-gray-400"*/}
      {/*      xmlns="http://www.w3.org/2000/svg"*/}
      {/*      viewBox="0 0 20 20"*/}
      {/*      fill="currentColor"*/}
      {/*      aria-hidden="true"*/}
      {/*    >*/}
      {/*      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />*/}
      {/*    </svg>*/}
      {/*    <span>Edit</span>*/}
      {/*  </button>*/}
      {/*  <button*/}
      {/*    type="button"*/}
      {/*    className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"*/}
      {/*  >*/}
      {/*    /!* Heroicon name: solid/bell *!/*/}
      {/*    <svg*/}
      {/*      className="-ml-1 mr-2 h-5 w-5 text-gray-400"*/}
      {/*      xmlns="http://www.w3.org/2000/svg"*/}
      {/*      viewBox="0 0 20 20"*/}
      {/*      fill="currentColor"*/}
      {/*      aria-hidden="true"*/}
      {/*    >*/}
      {/*      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />*/}
      {/*    </svg>*/}
      {/*    <span>Subscribe</span>*/}
      {/*  </button>*/}
      {/*</div>*/}
    </div>
  );
});
