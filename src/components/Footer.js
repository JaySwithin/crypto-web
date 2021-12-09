import React from 'react'

export default function Footer() {
  return (
    <div className="uk-section uk-section-xsmall bg-black mt-16">
      <div className="uk-container uk-container-expand">
        <div className="uk-grid uk-child-width-1-2@s uk-text-center uk-text-left@s" data-uk-grid>
          <div className='uk-text-center uk-text-left@s'>
            <p className='text-sm text-gray-400'>&copy; SWITHIN OKYERE - CRYPTOWEB</p>
          </div>
          <div className="uk-text-center uk-text-right@s">
            <p className='text-sm text-gray-400'>&trade; Designed & Developed by <a href="swithinokyere.netlify.app" target="_blank" title="Hit me up to see what I can do for you.">Swithin Okyere</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}