const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const player = $(".header-bot");
const cd = $(".header-bot-images");
const progress = $("#progress");
const header = $(".header");
const container = $(".container");
const slidebar_child = $$(".menu-element");
const mySong = $("#MySong");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const btn_rd = $(".btn-rd");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const discover = $("#Discover");
const playlist = $(".media-song");
const audio = $("audio");
const progressduration = $(".progress__duration");
const progresscurrent = $(".progress__current");
const playBtn = $(".btn-toggle-play");
const up_playing_now = $(".left-icon-3");
const down_playing_now = $(".left-icon-4");
const playing__now = $(".playing-now");
const playing_body_img = $(".playing-body-main");
console.log(slidebar_child);

const name_song = $(".header-bot-nameSongs h1");
const name_singer = $(".header-bot-nameSongs a");
const cdThumb = $(".cdThumb");

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},
  setConfig: function (key, value) {
    this.config[key] = value;
  },
  songs: [
    {
      name: "歸去來兮",
      singer: "葉炫清",
      path: "./assets/music/葉炫清.mp3",
      image: "./assets/images/Songs-img/歸去來兮.webp",
      time: audio.duration,
    },
    {
      name: "Suốt Đời Không Xứng",
      singer: "Khải Đăng x Vương Anh Tú x Ribi SaChi ",
      path: "./assets/music/SuotDoiKhongXung.mp3",
      image: "./assets/images/Songs-img/suotdoikhongxung.webp",
      time: audio.duration,
    },
    {
      name: "Tìm Được Một Nửa Hoá Ra Lại Chưa",
      singer: "Thương Võ x Vương Anh Tú",
      path: "./assets/music/TimDuocMotNuaHoaRaLaiChua.mp3",
      image: "./assets/images/Songs-img/timduocmotnuahoaralaichua.webp",
      time: audio.duration,
    },
    {
      name: "Người Lạ Thoáng Qua",
      singer: "Đình Tùng Huy",
      path: "./assets/music/nguoilathoangqua.mp3",
      image: "./assets/images/Songs-img/nguoilathoangqua.webp",
      time: audio.duration,
    },
    {
      name: "Anh Thương Em Nhất Mà",
      singer: "Lã. x Log x TiBne",
      path: "./assets/music/AnhThuongEmNhatMa.mp3",
      image: "./assets/images/Songs-img/anhthuongemnhatma.jpg",
      time: audio.duration,
    },
    {
      name: "Apologize",
      singer: "Timbaland ft. OneRepublic",
      path: "./assets/music/Apologize.mp3",
      image: "./assets/images/Songs-img/apologize.jpg",
    },
    {
      name: "Cho Mình Em",
      singer: "Binz ft. Đen Vâu",
      path: "./assets/music/ChoMinhEm.mp3",
      image: "./assets/images/Songs-img/chominhem.jpg",
    },
    {
      name: "Có Lẽ Anh Chưa Từng",
      singer: "ONLY C ft. KARIK",
      path: "./assets/music/CoLeAnhChuaTung.mp3",
      image: "./assets/images/Songs-img/coleanhchuatung.jpg",
    },
    {
      name: "Có Một Nơi Như Thế",
      singer: "Phan Mạnh Quỳnh",
      path: "./assets/music/CoMotNoiNhuThe.mp3",
      image: "./assets/images/Songs-img/comotnoinhuthe.jpg",
    },
    {
      name: "Dù Có Cách Xa",
      singer: "Đinh Mạnh Ninh",
      path: "./assets/music/DuCoCachXa.mp3",
      image: "./assets/images/Songs-img/ducocachxa.jpg",
    },
    {
      name: "Già Cùng Nhau Là Được",
      singer: "TeA ft. PC ( Prod. VoVanDuc)",
      path: "./assets/music/GiaCungNhauLaDuoc.mp3",
      image: "./assets/images/Songs-img/giacungnhauladuoc.jpg",
    },
    {
      name: "Hẹn Em Kiếp Sau",
      singer: "Lã, Duy Phúc, TIB",
      path: "./assets/music/HenEmKiepSau.mp3",
      image: "./assets/images/Songs-img/henemkiepsau.jpg",
    },
    {
      name: "Hương Rừng",
      singer: "TeA ft. Mr Shyn (Prod. VoVanDuc)",
      path: "./assets/music/HuongRung.mp3",
      image: "./assets/images/Songs-img/huongrung.jpg",
    },
    {
      name: "I Love You",
      singer: "Only C",
      path: "./assets/music/ILoveYou.mp3",
      image: "./assets/images/Songs-img/iloveyou2.jpg",
    },
    {
      name: "LeMon Tree",
      singer: "Gustixa",
      path: "./assets/music/LemonTree.mp3",
      image: "./assets/images/Songs-img/lemontree.jpg",
    },
    {
      name: "Let Me Down Slowly",
      singer: "Alec BenjaMin",
      path: "./assets/music/LetMeDownSlowly.mp3",
      image: "./assets/images/Songs-img/letmedownslowly.jpeg",
    },
    {
      name: "Mây Theo Mùa Hạ",
      singer: "Côngg x 2703",
      path: "./assets/music/MayTheoMuaHa.mp3",
      image: "./assets/images/Songs-img/maytheomuaha.jpg",
    },
    {
      name: "Pinocchio",
      singer: "Zero 9",
      path: "./assets/music/Pinocchio.mp3",
      image: "./assets/images/Songs-img/pinocchio.jpg",
    },
    {
      name: "Reality",
      singer: "Lost Frequencies",
      path: "./assets/music/Reality.mp3",
      image: "./assets/images/Songs-img/reality.jpg",
    },
    {
      name: "SOFAR",
      singer: "Binz",
      path: "./assets/music/Sofar.mp3",
      image: "./assets/images/Songs-img/sofar.jpg",
    },
    {
      name: "Vệt Nắng",
      singer: "Bảo Thạch",
      path: "./assets/music/VetNang.mp3",
      image: "./assets/images/Songs-img/vetnang.jpg",
    },
    {
      name: "Vì Anh Đã Yêu",
      singer: "Phạm Kỳ",
      path: "./assets/music/ViAnhDaYeu.mp3",
      image: "./assets/images/Songs-img/vianhdayeu.jpg",
    },
    {
      name: "Why Not Me",
      singer: "Enrique Iglesias",
      path: "./assets/music/WhyNotMe.mp3",
      image: "./assets/images/Songs-img/whynotme.jpg",
    },
    {
      name: "Xuân Thì",
      singer: "Hà Anh Tuấn",
      path: "./assets/music/XuanThi.mp3",
      image: "./assets/images/Songs-img/xuanthi.jpg",
    },
    // {
    //   name: '',
    //   singer: '',
    //   path: './',
    //   image: './',
    // },
  ],

  // Thông tin bài hát đầu tiên
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },

  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;
    const icon_favorite = $$(".fas.fa-heart");

    //xử lý CD quay
    const cdThumAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000,
      iterations: Infinity,
    });
    cdThumAnimate.pause();

    //xử lý khi click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Xử lí khi click btn 'Phát ngẫu nhiên'
    btn_rd.onclick = function () {
      _this.playRandomSong();
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    //xử lý khi bài hát được play
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumAnimate.play();
    };

    //xử lý khi bài hát bị pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumAnimate.pause();
    };

    // Khi tiến độ bài hát thay đổi
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
      _this.timeCurrent();
      _this.timeDuration();
    };

    // Xử lý khi tua song
    progress.oninput = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };

    // Xử lý khi next bài hát
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Xử lý khi prev bài hát
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Xử lý khi bật/tắt random bài hát
    randomBtn.onclick = function () {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };

    // Xử lý khi lặp lại một bài hát
    repeatBtn.onclick = function () {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isReapt);
    };

    //xử lý next bài hát khi audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // lắng nghe hành vi click vào playlist
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".media-song-child:not(.active)");

      if (songNode || e.target.closest(".option")) {
        //xử lý khi click vào bài hát
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }
      }
    };

    // Chuyển slidebar-child
    slidebar_child.forEach((e) => {
      e.addEventListener("click", function () {
        slidebar_child.forEach((e) => e.classList.remove("active"));
        this.classList.add("active");
      });
    });

    // Icon Favorite / Error x
    icon_favorite.forEach((e) => {
      e.addEventListener("click", function () {
        icon_favorite.forEach((e) => e.classList.toggle("active"));
      });
    });

    // xử lí playing__now UP
    up_playing_now.onclick = function () {
      playing__now.style.display = "flex";
      playing__now.style.animation = "up-playing-now linear 1s";
      up_playing_now.style.display = "none";
      down_playing_now.style.display = "block";
      playing__now.style.visibility = "inherit";
      playing__now.style.transition = "all linear 1s";
    };

    // xử lí playing__now DOWN
    down_playing_now.onclick = function () {
      playing__now.style.animation = "down-playing-now linear 1s";
      up_playing_now.style.display = "block";
      down_playing_now.style.display = "none";
      playing__now.style.visibility = "hidden";
      playing__now.style.transition = "all linear 1s";
    };
  },

  scrollToActiveSong: function () {
    setTimeout(() => {
      if (this.currentIndex <= 2) {
        $(".media-song-child.active").scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      } else {
        $(".media-song-child.active").scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 300);

    setTimeout(() => {
      if (this.currentIndex <= 2) {
        $(".playing-body-img.active").scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      } else {
        $(".playing-body-img.active").scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 300);

  },

  loadCurrentSong: function () {
    name_song.textContent = this.currentSong.name;
    name_singer.textContent = this.currentSong.singer;
    cdThumb.src = `${this.currentSong.image}`;
    audio.src = this.currentSong.path;
  },

  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isReapet = this.config.isRepeat;
  },
  // Next
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  // Prev
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  // Run btn randum
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  // Định dạng time
  formatTime: function (sec_num) {
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - hours * 3600) / 60);
    let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);

    hours = hours < 10 ? (hours > 0 ? "0" + hours : 0) : hours;

    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return (hours !== 0 ? hours + ":" : "") + minutes + ":" + seconds;
  },
  // Render Playlist
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
            <div class="media-song-child ${
              index === this.currentIndex ? "active" : ""
            }" data-index = ${index}>
            <div class="row">
                <div class="media-left col l-6 m-8">
                    <div class="media-left-img">
                        <img src="${song.image}"
                            alt="">
                    </div>
                    <div class="header-bot-nameSongs">
                        <h1>${song.name}</h1>
                        <a href="#">${song.singer}</a>
                    </div>
                </div>

                <div class="media-mid col l-3 m-1">
                    <span class="duration-song">${index}</span>
                </div>

                <div class="media-right col l-3 m-3">
                    <i class="ti-microphone"></i>
                    <i class="fas fa-heart icon-heart ${
                      index === this.currentIndex ? "active" : ""
                    }"></i>
                    <i class="ti-more"></i>
                </div>
            </div>
        </div>
            `;
    });

    const htmls_1 = this.songs.map((song, index) => {
      return `
        <div class="playing-body-img ${index === this.currentIndex ? "active" : ""}" >
          <img class="playing-img" src="${song.image}" alt="">
          <div class="playing-img-title">
            <h1>${song.name}</h1>
            <span>${song.singer}</span>
          </div>
        </div>
        `;
    });
    playing_body_img.innerHTML = htmls_1.join("");
    playlist.innerHTML = htmls.join("");
  },

  // Hiển thị thời gian bài hát hiện tại
  timeCurrent: function () {
    setInterval(() => {
      let cur = this.formatTime(audio.currentTime);
      progresscurrent.textContent = `${cur}`;
    }, 100);
  },

  // Hiển thị thời gian bài hát
  timeDuration: function () {
    if (audio.duration) {
      let dur = this.formatTime(audio.duration);
      progressduration.textContent = `${dur}`;
    }
  },

  star: function () {
    this.loadConfig();

    this.defineProperties();

    this.handleEvents();

    this.loadCurrentSong();

    this.render();
  },
};

app.star();

/* --------------------------------------------------------------------------------------------- */
