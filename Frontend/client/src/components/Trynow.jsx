import React from 'react'

const Trynow = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-white px-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-7 text-center'>
            Remove Image Background
        </h2>
        <p className='text-gray-500 mb-8 text-center'>
            Upload your image and see how easy it is to remove the background in seconds.
        </p>
        <div className='bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center space-y-4 hover:shadow-2xl transition-shadow duration-300'>
            <input type="file" id='upload2' hidden accept='image/*'/>
            <label htmlFor="upload2"
                className='bg-indigo-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full text-lg'>
                    Upload Image
            </label>
            <p className='text-gray-500 text-sm'>
                or drop a file, paste image or <a href="#" className='text-blue-500 underline'>URL</a>
            </p>
        </div>
    </div>
  )
}

export default Trynow