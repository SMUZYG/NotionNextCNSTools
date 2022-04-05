import BLOG from '@/blog.config'
import React from 'react'

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  return (
    <div className="w-full justify-center flex-wrap flex">
      <div className="space-x-3 text-xl text-gray-600 dark:text-gray-400 ">
        {BLOG.CONTACT_GITHUB && (
          <a
            target="_blank"
            rel="noreferrer"
            title={'github'}
            href={BLOG.CONTACT_GITHUB}
          >
            <i className="transform hover:scale-125 duration-150 fab fa-github" />
          </a>
        )}
        {BLOG.CONTACT_GITHUB && (
          <a
            target="_blank"
            rel="noreferrer"
            title={'github'}
            href={BLOG.CONTACT_GITHUB}
          >
            <i className="transform hover:scale-125 duration-150 fab fa-github" />
          </a>
        )}
        {BLOG.CONTACT_TWITTER && (
          <a
            target="_blank"
            rel="noreferrer"
            title={'twitter'}
            href={BLOG.CONTACT_TWITTER}
          >
            <i className="transform hover:scale-125 duration-150 fab fa-twitter" />
          </a>
        )}
        {BLOG.CONTACT_TELEGRAM && (
          <a
            target="_blank"
            rel="noreferrer"
            href={BLOG.CONTACT_TELEGRAM}
            title={'telegram'}
          >
            <i className="transform hover:scale-125 duration-150 fab fa-telegram" />
          </a>
        )}
        {BLOG.CONTACT_WEIBO && (
          <a
            target="_blank"
            rel="noreferrer"
            title={'weibo'}
            href={BLOG.CONTACT_WEIBO}
          >
            <i className="transform hover:scale-125 duration-150 fab fa-weibo" />
          </a>
        )}
        {BLOG.CONTACT_EMAIL && (
          <a
            target="_blank"
            rel="noreferrer"
            title={'email'}
            href={`mailto:${BLOG.CONTACT_EMAIL}`}
          >
            <i className="transform hover:scale-125 duration-150 fas fa-envelope" />
          </a>
        )}
        <a target="_blank" rel="noreferrer" title={'RSS'} href={'/feed'}>
          <i className="transform hover:scale-125 duration-150 fas fa-rss" />
        </a>
      </div>
    </div>
  )
}
export default SocialButton
