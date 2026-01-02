export default function ({ author, username, date, text, avatar, fullUrl }) {
  return (`
<div class="content">
  <div class="tweet-card">
    <div class="tweet-header">
      <div class="avatar">
        <img src="${fullUrl(avatar)}" alt="Avatar Author">
      </div>
      <div class="user-info">
        <div class="user-details">
          <span class="fullname">${author}</span>
          <span class="username">${username}</span>
        </div>
        <span class="date">${date}</span>
      </div>
    </div>
    <div class="tweet-content">
      ${text}
    </div>
  </div>
</div>
  `);
}
