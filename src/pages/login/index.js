import {
  formatMessage,
  setLocale,
  getLocale,
  LangContext,
  _setLocaleContext,
  FormattedDate,
  FormattedMessage
} from 'umi-plugin-locale'

export default () => {
  return (
    <div>
      login page
      <div>
        {formatMessage({ id: 'name' })}
        <button
          onClick={() => {
            setLocale(getLocale() === 'en-US' ? 'zh-CN' : 'en-US', false)
          }}
        >
          换语言
        </button>
      </div>
    </div>
  )
}
