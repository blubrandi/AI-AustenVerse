let chatHistoryKey
let username

const handleCharacterBios = () => {
  let dropdown = document.getElementById('character')
  let homeImage = document.getElementById('home-image')
  let characterBios = document.getElementById('character-bios')
  let cbLeft = document.querySelector('.cb-left')
  let cbRight = document.querySelector('.cb-right')

  dropdown.addEventListener('change', (event) => {
    event.preventDefault()
    let optionSelected = event.target.value
    let divToShow, divToHide

    const setBio = (imgPath, name, spouse, bio, quote) => {
      let img = document.createElement('img')
      img.src = imgPath
      img.alt = name

      cbLeft.innerHTML = '' 
      cbRight.innerHTML = ''

      cbLeft.appendChild(img)

      let namePara = document.createElement('p')
      namePara.textContent = `Name: ${name}`
      cbRight.appendChild(namePara)

      let spousePara = document.createElement('p')
      spousePara.textContent = `Spouse: ${spouse}`
      cbRight.appendChild(spousePara)

      let bioPara = document.createElement('p')
      bioPara.textContent = `Bio: ${bio}`
      cbRight.appendChild(bioPara)

      let quotePara = document.createElement('p')
      quotePara.textContent = `Best Quote: "${quote}"`
      cbRight.appendChild(quotePara)
    }

    switch (optionSelected) {
      case 'Click to Select':
        divToShow = homeImage
        divToHide = characterBios
        divToShow.classList.remove('d-none')
        divToHide.classList.add('d-none')
        break
      case 'Elizabeth (Lizzy) Bennet':
        divToHide = homeImage
        divToShow = characterBios
        setBio(
          '/assets/lizzy-bennet.webp',
          'Elizabeth (Lizzy) Bennet',
          'Fitzwilliam Darcy',
          'Elizabeth Bennet is the intelligent and spirited second daughter of Mr. and Mrs. Bennet. Known for her wit and keen sense of justice, she often clashes with Mr. Darcy before realizing his true character and falling in love with him.',
          'I could easily forgive his pride, if he had not mortified mine.'
        )
        divToHide.classList.add('d-none')
        divToShow.classList.remove('d-none')
        break
      case 'Fitzwilliam Darcy':
        divToHide = homeImage
        divToShow = characterBios
        setBio(
          '/assets/mr-darcy.webp',
          'Fitzwilliam Darcy',
          'Elizabeth Bennet',
          'Fitzwilliam Darcy is a wealthy and reserved gentleman, initially perceived as proud and aloof. Over time, his deep sense of honor and genuine kindness are revealed, leading to his marriage to Elizabeth Bennet.',
          'You must allow me to tell you how ardently I admire and love you.'
        )
        divToHide.classList.add('d-none')
        divToShow.classList.remove('d-none')
        break
      case 'Charles Bingley':
        divToHide = homeImage
        divToShow = characterBios
        setBio(
          '/assets/mr-bingley.webp',
          'Charles Bingley',
          'Jane Bennet',
          'Charles Bingley is a wealthy, charming, and affable gentleman who quickly forms an attachment to Jane Bennet. His easy-going nature contrasts with Darcy\'s more reserved demeanor.',
          'But no sooner had he made it clear to himself and his friends that she had hardly a good feature in her face, than he began to find it was rendered uncommonly intelligent by the beautiful expression of her dark eyes.'
        )
        divToHide.classList.add('d-none')
        divToShow.classList.remove('d-none')
        break
      case 'Jane Bennet':
        divToHide = homeImage
        divToShow = characterBios
        setBio(
          '/assets/jane-bennet.webp',
          'Jane Bennet',
          'Charles Bingley',
          'Jane Bennet is the eldest Bennet sister, known for her beauty and sweetness of temper. Her kind and gentle nature endears her to Mr. Bingley.',
          'I have no idea of there being so much design in the world as some persons imagine.'
        )
        divToHide.classList.add('d-none')
        divToShow.classList.remove('d-none')
        break
      case 'Mr. Bennet':
        divToHide = homeImage
        divToShow = characterBios
        setBio(
          '/assets/mr-bennet.webp',
          'Mr. Bennet',
          'Mrs. Bennet',
          'Mr. Bennet is the sarcastic and often detached father of the Bennet family. He has a dry sense of humor and often retreats to his library to escape the frivolities of his wife and daughters.',
          'For what do we live, but to make sport for our neighbors, and laugh at them in our turn?'
        )
        divToHide.classList.add('d-none')
        divToShow.classList.remove('d-none')
        break
      case 'Mrs. Bennet':
        divToHide = homeImage
        divToShow = characterBios
        setBio(
          '/assets/mrs-bennet.webp',
          'Mrs. Bennet',
          'Mr. Bennet',
          'Mrs. Bennet is the excitable and often embarrassing mother of the Bennet sisters. Her primary goal in life is to see her daughters married, preferably to wealthy suitors.',
          'You take delight in vexing me. You have no compassion on my poor nerves.'
        )
        divToHide.classList.add('d-none')
        divToShow.classList.remove('d-none')
        break
      case 'Lydia Bennet':
        divToHide = homeImage
        divToShow = characterBios
        setBio(
          'assets/lydia-bennet.webp',
          'Lydia Bennet',
          'George Wickham',
          'Lydia Bennet is the youngest and most impulsive of the Bennet sisters. Her reckless behavior leads to an elopement with George Wickham, causing a scandal in the family.',
          'What a good joke it will be! I can hardly write for laughing.'
        )
        divToHide.classList.add('d-none')
        divToShow.classList.remove('d-none')
        break
      case 'Caroline Bingley':
        divToHide = homeImage
        divToShow = characterBios
        setBio(
          '/assets/caroline-bingley.webp',
          'Caroline Bingley',
          'Unmarried',
          'Caroline Bingley is the snobbish and scheming sister of Charles Bingley. She harbors feelings for Mr. Darcy and looks down upon the Bennet family, especially Elizabeth.',
          'I declare after all there is no enjoyment like reading! How much sooner one tires of anything than of a book!'
        )
        divToHide.classList.add('d-none')
        divToShow.classList.remove('d-none')
        break
      case 'George Wickham':
        divToHide = homeImage
        divToShow = characterBios
        setBio(
          '/assets/mr-wickham.webp',
          'George Wickham',
          'Lydia Bennet',
          'George Wickham is a charming but deceitful militia officer. He attempts to elope with Darcy\'s sister for her fortune and later succeeds in eloping with Lydia Bennet.',
          'A young man, such as you describe Mr. Darcy, would hardly have done for my mother.'
        )
        divToHide.classList.add('d-none')
        divToShow.classList.remove('d-none')
        break
      case 'William Collins':
        divToHide = homeImage
        divToShow = characterBios
        setBio(
          '/assets/mr-collins.webp',
          'William Collins',
          'Charlotte Lucas',
          'William Collins is a pompous and obsequious clergyman. He is the Bennet family\'s heir due to entailment and marries Charlotte Lucas after being rejected by Elizabeth Bennet.',
          'It is a truth universally acknowledged that a single man in possession of a good fortune must be in want of a wife.'
        )
        divToHide.classList.add('d-none')
        divToShow.classList.remove('d-none')
        break
      case 'Charlotte Lucas':
        divToHide = homeImage
        divToShow = characterBios
        setBio(
          '/assets/charlotte-lucas.webp',
          'Charlotte Lucas',
          'William Collins',
          'Charlotte Lucas is Elizabeth Bennet\'s sensible and pragmatic friend. She marries Mr. Collins for financial security, despite his tedious personality.',
          'I am not romantic, you know I never was. I ask only a comfortable home.'
        )
        divToHide.classList.add('d-none')
        divToShow.classList.remove('d-none')
        break
      case 'Edward Gardiner':
        divToHide = homeImage
        divToShow = characterBios
        setBio(
          '/assets/mr-gardiner.webp',
          'Edward Gardiner',
          'Mrs. Gardiner',
          'Edward Gardiner is Mrs. Bennet\'s brother, a sensible and kind businessman from London. He provides support and guidance to the Bennet family, particularly Elizabeth.',
          '(No specific quote available from the text)'
        )
        divToHide.classList.add('d-none')
        divToShow.classList.remove('d-none')
        break
      case 'Mrs. Gardiner':
        divToHide = homeImage
        divToShow = characterBios
        setBio(
          '/assets/mrs-gardiner.webp',
          'Mrs. Gardiner',
          'Edward Gardiner',
          'Mrs. Gardiner is a wise and caring woman who offers practical advice and support to her nieces, particularly Jane and Elizabeth Bennet.',
          '(No specific quote available from the text)'
        )
        divToHide.classList.add('d-none')
        divToShow.classList.remove('d-none')
        break
      case 'Mrs. Reynolds':
        divToHide = homeImage
        divToShow = characterBios
        setBio(
          '/assets/mrs-reynolds.webp',
          'Mrs. Reynolds',
          'Unmarried (presumably widowed)',
          'Mrs. Reynolds is the housekeeper at Pemberley, Mr. Darcy\'s estate. She speaks highly of Darcy\'s character, influencing Elizabeth Bennet\'s perception of him.',
          'He is the best landlord, and the best master that ever lived.'
        )
        divToHide.classList.add('d-none')
        divToShow.classList.remove('d-none')
        break
      default:
        console.log('Something weird happened when selecting a character')
        break
    }
  })
}

handleCharacterBios()

function scrollToBottom() {
  const chatHistory = document.getElementById('chat-history')
  chatHistory.scrollTop = chatHistory.scrollHeight
}


function loadChatHistory() {
  if (chatHistoryKey) {
    const chatHistory = localStorage.getItem(chatHistoryKey)
    if (chatHistory) {
      document.getElementById('chat-history').innerHTML = chatHistory
    }
    scrollToBottom()
  } else {
    initializeChat()
  }
}

function saveChatHistory() {
  if (chatHistoryKey) {
    const chatHistory = document.getElementById('chat-history').innerHTML
    localStorage.setItem(chatHistoryKey, chatHistory)
  }
}

function changeCharacter() {
  if (chatHistoryKey) {
    localStorage.removeItem(chatHistoryKey)
  }
  document.getElementById('chat-history').innerHTML = ''
}

function startChat() {
  const character = document.getElementById('character').value
  username = document.getElementById('username').value

  if (!username) {
    alert('Please enter your name.')
    return
  }

  if (character === 'Click to Select') {
    alert('Please select a character')
    return
  }

  chatHistoryKey = 'chatHistory_' + character

  document.getElementById('setup-screen').style.display = 'none'
  document.getElementById('chatbot-space').style.display = 'flex'

  const characterMessageDiv = document.createElement('div')
  characterMessageDiv.classList.add('chat-message', 'character')
  characterMessageDiv.innerHTML = `<div class="message-caption">${character}:</div><div>${`Hello ${username}, I am ${character}. To what do I owe thy honor?`}</div>`
  document.getElementById('chat-history').appendChild(characterMessageDiv)
  saveChatHistory()
  scrollToBottom()
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('userInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      sendMessage()
      document.getElementById('userInput').textContent('')
    }
  })


async function sendMessage() {
  const userInput = document.getElementById('userInput').value
  if (!userInput.trim()) return

  const character = document.getElementById('character').value
  const userMessageDiv = document.createElement('div')

  userMessageDiv.classList.add('chat-message', 'user')
  userMessageDiv.innerHTML = `<div class="message-caption">${username}:</div><div>${userInput}</div>`

  document.getElementById('chat-history').appendChild(userMessageDiv)

  saveChatHistory()
  scrollToBottom()

  document.getElementById('userInput').value = '' 

  try {
    const response = await fetch('/.netlify/functions/chat', {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt: userInput, character: character })
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    const characterMessageDiv = document.createElement('div')
    characterMessageDiv.classList.add('chat-message', 'character')
    characterMessageDiv.innerHTML = `<div class="message-caption">${character}:</div><div>${data.response}</div>`
    document.getElementById('chat-history').appendChild(characterMessageDiv)
    saveChatHistory()
    scrollToBottom()

  } catch (error) {
    console.error('Error:', error)
    const errorMessageDiv = document.createElement('div')
    errorMessageDiv.classList.add('chat-message', 'character')
    errorMessageDiv.innerText = 'Error calling API'
    document.getElementById('chat-history').appendChild(errorMessageDiv)
    saveChatHistory()
    scrollToBottom()
  }
}

function exitChat() {
  if (chatHistoryKey) {
    localStorage.removeItem(chatHistoryKey)
  }
  document.getElementById('chat-history').innerHTML = ''
  document.getElementById('setup-screen').style.display = 'flex'
  document.getElementById('chatbot-space').style.display = 'none'
}

  document.getElementById('exitChat').addEventListener('click', function() {
    exitChat()
  })
})

document.addEventListener('DOMContentLoaded', loadChatHistory)
document.addEventListener('DOMContentLoaded', handleCharacterBios)
