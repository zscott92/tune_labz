'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      { id: 1, user_name: 'UserName1', user_password: "password", artistname: "1Chain" },
      { id: 2, user_name: 'UserName2', user_password: "password", artistname: "2Chains" },
      { id: 3, user_name: 'UserName3', user_password: "password", artistname: "3Chains" }
    ], {});



    return await queryInterface.bulkInsert('songs', [
      { key: "original", song_name: "Black Betty", song_desc: "Produced 1989", song_pic_url: "https://www.online-tech-tips.com/wp-content/uploads/2009/06/audio-wave.jpg.optimal.jpg", song_genres: "rock", song_id: 1, user_id: 1, song_par_id: 0 },
      { key: "remix lev 1", song_name: "Ram Jam Black Betty Remix", song_desc: "Club Remix", song_pic_url: "", song_genres: "techno, pop", song_id: 2, user_id: 2, song_par_id: 1 },
      { key: "remix lev 2", song_name: "Jazz Techno Remix", song_desc: "Club Remix 2", song_pic_url: "", song_genres: "jazz, pop", song_id: 3, user_id: 3, song_par_id: 2 },
      { key: "remix lev 1", song_name: "Black Betty D&B Remix", song_desc: "Dance Remix", song_pic_url: "", song_genres: "techno, pop", song_id: 4, user_id: 3, song_par_id: 1 },
      { key: "remix lev 2", song_name: "Hip Hop Remix", song_desc: "ATL Remix", song_pic_url: "", song_genres: "rap, pop", song_id: 5, user_id: 1, song_par_id: 4 },
      { key: "original", song_name: "Panini", song_desc: "original song", song_pic_url: "", song_genres: "rap, pop", song_id: 6, user_id: 1, song_par_id: 0 },
      { key: "original", song_name: "Truth Hurts", song_desc: "original song", song_pic_url: "", song_genres: "soul, pop", song_id: 7, user_id: 2, song_par_id: 0 },
      { key: "original", song_name: "Dyer Maker", song_desc: "original song", song_pic_url: "", song_genres: "rock", song_id: 8, user_id: 3, song_par_id: 0 },
      { key: "remix lev 1", song_name: "Panini Remix 1", song_desc: "remix lev 1", song_pic_url: "", song_genres: "rap, pop", song_id: 9, user_id: 1, song_par_id: 6 },
      { key: "remix lev 1", song_name: "Truth Hurts  Remix 1", song_desc: "remix lev 1", song_pic_url: "", song_genres: "soul, pop", song_id: 10, user_id: 2, song_par_id: 7 },
      { key: "remix lev 1", song_name: "Dyer Maker Remix 1", song_desc: "remix lev 1", song_pic_url: "", song_genres: "rock", song_id: 11, user_id: 3, song_par_id: 8 },
      { key: "remix lev 2", song_name: "Panini Remix 2", song_desc: "remix lev 2", song_pic_url: "", song_genres: "rap, pop", song_id: 12, user_id: 1, song_par_id: 9 },
      { key: "remix lev 2", song_name: "Truth Hurts Remix 2", song_desc: "remix lev 2", song_pic_url: "", song_genres: "soul, pop", song_id: 13, user_id: 2, song_par_id: 10 },
      { key: "remix lev 2", song_name: "Dyer Maker Remix 2", song_desc: "remix lev 2", song_pic_url: "", song_genres: "rock", song_id: 14, user_id: 3, song_par_id: 11 }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('songs', null, {});
  }
};
