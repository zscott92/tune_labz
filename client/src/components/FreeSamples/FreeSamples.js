import FreeSound from 'freesound-client';

const freeSound = new FreeSound();

// Set token
freeSound.setToken(process.env.FREESOUND_REFRESH_TOKEN);

await freeSound.getUser('Jovica');

const [sounds, packs, bookCat, bookCatSounds] = await Promise.all([
  user.sounds(),
  user.packs(),
  user.bookmarkCategories(),
  user.bookmarkCategorySounds()
]);

const pack = await freeSound.getPack(9678);

const packSounds = await pack.sounds()

// Getting a sound
const sound = await freeSound.getSound(96541);
// Getting a sound's related data
const [analysis, similar, comments] = await Promise.all([
  sound.getAnalysis(),
  sound.getSimilar(),
  sound.getComments()
]);

// Text search 
await freeSound.textSearch('violoncello', {
  page: 1,
  filter: 'tag:tenuto duration:[1.0 TO 15.0]',
  sort: 'rating_desc',
  fields: 'id,name,url'
});

// Combined search
await freeSound.combinedSearch({
  target: 'rhythm.bpm:120&filter=tag:loop'
});

// Content search
await freeSound.contentSearch({
  target: 'lowlevel.pitch.mean:220'
});


freeSound.setToken('your-api-key', 'oauth');

freeSound.setClientSecrets(FREESOUND_CLIENT_ID, 'your-client-secret');
// Make the user navigate here
freeSound.getLoginURL();