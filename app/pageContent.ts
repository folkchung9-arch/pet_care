export const pageHtml = `<header class="topbar">
    <nav class="nav" aria-label="主导航">
      <a class="brand" href="#top" aria-label="毛绒星球宠物洗护首页">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M8.5 10.5c1.1 0 2-1.2 2-2.7s-.9-2.8-2-2.8-2 1.2-2 2.8.9 2.7 2 2.7Z"/><path d="M15.5 10.5c1.1 0 2-1.2 2-2.7s-.9-2.8-2-2.8-2 1.2-2 2.8.9 2.7 2 2.7Z"/><path d="M5.5 15c1 0 1.8-1 1.8-2.2s-.8-2.3-1.8-2.3-1.8 1-1.8 2.3S4.5 15 5.5 15Z"/><path d="M18.5 15c1 0 1.8-1 1.8-2.2s-.8-2.3-1.8-2.3-1.8 1-1.8 2.3.8 2.2 1.8 2.2Z"/><path d="M8.1 16.1c.7-1.7 1.7-3.1 3.9-3.1s3.2 1.4 3.9 3.1c.7 1.8-.9 3.4-3.9 3.4s-4.6-1.6-3.9-3.4Z"/></svg>
        </span>
        <span>毛绒星球宠物洗护</span>
      </a>
      <div class="links" aria-label="页面锚点">
        <a href="#services">服务</a>
        <a href="#care">护理标准</a>
        <a href="#pricing">套餐</a>
        <a href="#booking">预约</a>
        <a href="#visit">到店</a>
      </div>
      <a class="nav-cta" href="#booking">立即预约</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero" aria-label="毛绒星球宠物洗护">
      <div class="hero-media" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=2200&q=86" alt="" />
      </div>
      <div class="hero-inner">
        <div class="hero-copy">
          <span class="eyebrow">预约制洗护 · 猫犬分区 · 可视化护理</span>
          <h1>让毛孩子干净、放松、闪闪发亮</h1>
          <p>从基础洗澡到造型修剪，毛绒星球用低压安抚、专业吹护和温和用品，照顾每一只不太会表达的小朋友。</p>
          <div class="hero-actions">
            <a class="primary-btn" href="#booking">预约洗护</a>
            <a class="ghost-btn" href="#pricing">查看套餐</a>
          </div>
          <div class="hero-stats" aria-label="门店数据">
            <div class="stat"><strong>4.9</strong><span>顾客平均评分</span></div>
            <div class="stat"><strong>12k+</strong><span>累计服务宠物</span></div>
            <div class="stat"><strong>1v1</strong><span>全程独立护理</span></div>
          </div>
        </div>
      </div>
    </section>

    <section id="services">
      <div class="wrap">
        <div class="section-head">
          <h2>从洗净到养护，步骤清清楚楚</h2>
          <p>每次到店先做皮毛观察和性格评估，再选择水温、吹风方式和护理节奏。</p>
        </div>
        <div class="service-grid">
          <article class="service">
            <span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 14c2.5-4.5 5-6.8 8-6.8s5.5 2.3 8 6.8"/><path d="M6.5 14.5h11"/><path d="M8.5 18h7"/></svg></span>
            <h3>基础香波洗护</h3>
            <p>温和清洁、耳道外侧清理、脚底毛修整、指甲打磨和蓬松吹干。</p>
          </article>
          <article class="service">
            <span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 6h16"/><path d="M6 6v13h12V6"/><path d="M9 10h6"/><path d="M9 14h6"/></svg></span>
            <h3>深层皮毛护理</h3>
            <p>针对掉毛、打结、皮屑和油脂做定制护理，适合换毛期和长毛犬猫。</p>
          </article>
          <article class="service">
            <span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 20 20 4"/><path d="m14 4 6 6"/><path d="m4 14 6 6"/><path d="M12 8h.01"/><path d="M8 12h.01"/></svg></span>
            <h3>造型修剪</h3>
            <p>泰迪、比熊、雪纳瑞等常见造型，也支持按体型和生活习惯微调。</p>
          </article>
          <article class="service">
            <span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 21s7-4.4 7-11a7 7 0 0 0-14 0c0 6.6 7 11 7 11Z"/><path d="M9 10h6"/><path d="M12 7v6"/></svg></span>
            <h3>敏感宠物安抚</h3>
            <p>为胆小、老年、幼宠提供慢节奏护理，不强迫、不催促，必要时分段完成。</p>
          </article>
        </div>
      </div>
    </section>

    <section class="feature-band" id="care">
      <div class="wrap split">
        <div class="photo-stack">
          <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=84" alt="洗护师抱着刚护理完的狗狗" />
          <img src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=700&q=84" alt="放松的猫咪特写" />
        </div>
        <div>
          <span class="eyebrow" style="color: var(--sage-dark)">护理标准</span>
          <div class="section-head" style="display:block;margin:14px 0 0">
            <h2>把“怕洗澡”变成可接受的日常</h2>
            <p style="margin-top:16px">我们更在意宠物的身体语言：喘息、躲避、夹尾巴、炸毛，都意味着需要降低刺激。</p>
          </div>
          <div class="check-list">
            <div class="check"><b>1</b><div><strong>猫犬独立空间</strong><span>独立等待区和护理台，减少气味、叫声和陌生宠物带来的压力。</span></div></div>
            <div class="check"><b>2</b><div><strong>低噪音吹护</strong><span>按体型和耐受度调节风力，长毛宠物先吸水再吹干，降低拉扯。</span></div></div>
            <div class="check"><b>3</b><div><strong>护理后反馈</strong><span>到店结束会告知皮肤、耳朵、牙齿、指甲和毛结情况，方便主人继续照顾。</span></div></div>
          </div>
        </div>
      </div>
    </section>

    <section class="environment" id="environment">
      <div class="wrap">
        <div class="section-head">
          <h2>店内环境</h2>
          <p>从接待零售、透明洗护到独立烘干护理，空间按高端宠物 SPA 的节奏设计，让主人安心，也让毛孩子更放松。</p>
        </div>
        <div class="environment-carousel" aria-label="店内环境轮播图">
          <div class="environment-track">
            <article class="environment-slide">
              <img src="/assets/environment/reception-retail.png" alt="高端宠物洗护店接待与零售区域" />
              <div class="environment-caption">
                <span>RECEPTION</span>
                <h3>接待与精选零售区</h3>
                <p>温润石材、胡桃木与陈列护理产品，形成安静、精致的入店第一印象。</p>
              </div>
            </article>
            <article class="environment-slide">
              <img src="/assets/environment/wash-grooming.png" alt="高端宠物洗护店透明洗护护理区域" />
              <div class="environment-caption">
                <span>GROOMING</span>
                <h3>透明洗护护理区</h3>
                <p>玻璃分区与专业洗护设备结合，流程清晰可见，空间保持干净明亮。</p>
              </div>
            </article>
            <article class="environment-slide">
              <img src="/assets/environment/drying-suites.png" alt="高端宠物洗护店独立烘干与造型套间" />
              <div class="environment-caption">
                <span>SUITES</span>
                <h3>独立烘干造型套间</h3>
                <p>低压独立护理空间配合柔和照明，减少刺激，适合猫犬分区护理。</p>
              </div>
            </article>
          </div>
          <div class="environment-dots" aria-label="切换店内环境图片">
            <button class="environment-dot is-active" type="button" aria-label="查看接待与零售区域"></button>
            <button class="environment-dot" type="button" aria-label="查看透明洗护区域"></button>
            <button class="environment-dot" type="button" aria-label="查看独立烘干造型套间"></button>
          </div>
        </div>
      </div>
    </section>

    <section id="pricing">
      <div class="wrap">
        <div class="section-head">
          <h2>常用套餐</h2>
          <p>价格会根据体型、毛量、打结程度和配合度微调，下单前会先确认。</p>
        </div>
        <div class="price-grid">
          <article class="price">
            <span class="badge">日常清爽</span>
            <h3>基础洗护</h3>
            <p>适合短毛、日常维护和定期洗澡。</p>
            <div class="amount">¥88 <small>起</small></div>
            <ul>
              <li>香波清洁与护毛</li>
              <li>耳外清洁、剪指甲</li>
              <li>脚底毛与腹底毛修整</li>
            </ul>
            <a class="ghost-btn" href="#booking">选择套餐</a>
          </article>
          <article class="price featured">
            <span class="badge">人气推荐</span>
            <h3>深层洗护</h3>
            <p>适合掉毛期、毛量厚和容易有体味的宠物。</p>
            <div class="amount">¥168 <small>起</small></div>
            <ul>
              <li>基础洗护全套</li>
              <li>去浮毛与护毛素护理</li>
              <li>皮毛状态反馈卡</li>
            </ul>
            <a class="primary-btn" href="#booking">选择套餐</a>
          </article>
          <article class="price">
            <span class="badge">精致造型</span>
            <h3>洗剪造型</h3>
            <p>适合需要修剪轮廓、局部造型或完整美容的宠物。</p>
            <div class="amount">¥238 <small>起</small></div>
            <ul>
              <li>深层洗护全套</li>
              <li>全身造型修剪</li>
              <li>脸型、脚型、尾部精修</li>
            </ul>
            <a class="ghost-btn" href="#booking">选择套餐</a>
          </article>
        </div>
      </div>
    </section>

    <section id="booking" class="booking">
      <div class="wrap booking-panel">
        <div class="booking-info">
          <span class="eyebrow">今日可约 10:30 - 19:30</span>
          <h2>先预约，再留出一段不赶时间的护理</h2>
          <p>提交后门店会在 15 分钟内电话或微信确认。胆小、老年或首次到店的宠物，建议选择工作日上午。</p>
        </div>
        <form class="booking-form" id="bookingForm">
          <div class="form-grid">
            <label>主人姓名
              <input name="name" autocomplete="name" required placeholder="例如：林小姐" />
            </label>
            <label>联系电话
              <input name="phone" inputmode="tel" autocomplete="tel" required placeholder="手机号码" />
            </label>
            <label>宠物类型
              <select name="pet">
                <option>小型犬</option>
                <option>中大型犬</option>
                <option>猫咪</option>
                <option>幼宠 / 老年宠</option>
              </select>
            </label>
            <label>选择套餐
              <select name="package" id="packageSelect">
                <option value="88">基础洗护 ¥88 起</option>
                <option value="168" selected>深层洗护 ¥168 起</option>
                <option value="238">洗剪造型 ¥238 起</option>
                <option value="328">敏感宠物专属护理 ¥328 起</option>
              </select>
            </label>
            <label>预约日期
              <input name="date" type="date" required />
            </label>
            <label>到店时间
              <select name="time">
                <option>10:30</option>
                <option>13:00</option>
                <option>15:30</option>
                <option>17:30</option>
                <option>19:30</option>
              </select>
            </label>
            <label>到店人数
              <input name="visitors" type="number" inputmode="numeric" min="1" max="6" value="1" required />
            </label>
            <label class="full">备注
              <textarea name="note" placeholder="例如：怕吹风、毛结较多、第一次洗护、需要接送等"></textarea>
            </label>
          </div>
          <div class="estimate">
            <span>预估到店价</span>
            <strong id="estimatePrice">¥168 起</strong>
          </div>
          <button class="primary-btn" type="submit" style="width:100%">提交预约</button>
          <p class="form-message" id="formMessage" role="status" aria-live="polite"></p>
        </form>
      </div>
    </section>

    <section>
      <div class="wrap">
        <div class="section-head">
          <h2>熟悉宠物，也熟悉主人的担心</h2>
          <p>洗护师会记录每只宠物的敏感点、喜欢的安抚方式和上次护理情况。</p>
        </div>
        <div class="team-grid">
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=800&q=84" alt="洗护师和狗狗互动" />
            <div><h3>低压安抚</h3><p>不靠硬控完成护理，先建立安全感，再推进每个步骤。</p></div>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1601758063541-d2f50b4aafb2?auto=format&fit=crop&w=800&q=84" alt="狗狗洗护护理场景" />
            <div><h3>透明可视</h3><p>开放式护理区，主人可远距离观察，不打断宠物节奏。</p></div>
          </article>
          <article class="team-card">
            <img src="https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&w=800&q=84" alt="护理后的宠物狗" />
            <div><h3>长期档案</h3><p>记录毛量、皮肤、耳道、指甲变化，下次护理更有依据。</p></div>
          </article>
        </div>
      </div>
    </section>

    <section class="reviews" id="reviews">
      <div class="wrap">
        <div class="section-head">
          <h2>用户有效评论</h2>
          <p>来自近期到店主人的真实反馈，关注护理过程、环境和服务沟通。</p>
        </div>
        <div class="review-grid">
          <article class="review-card">
            <div class="review-top">
              <strong>林女士 · 柯基主人</strong>
              <span>深层洗护</span>
            </div>
            <div class="review-stars" aria-label="五星好评">★★★★★</div>
            <p>第一次来之前有点担心狗狗怕吹风，洗护师会先说明步骤，中途也提醒了耳朵和指甲情况。回家后毛很蓬松，味道也不刺鼻。</p>
            <div class="review-meta">2026.04.18 · 复购预约</div>
          </article>
          <article class="review-card">
            <div class="review-top">
              <strong>周先生 · 布偶猫主人</strong>
              <span>敏感宠物护理</span>
            </div>
            <div class="review-stars" aria-label="五星好评">★★★★★</div>
            <p>猫咪胆子比较小，店里没有强行推进，先让它适应环境。护理结束后会告诉我哪里有毛结，整体沟通很清楚。</p>
            <div class="review-meta">2026.04.09 · 低压安抚</div>
          </article>
          <article class="review-card">
            <div class="review-top">
              <strong>陈女士 · 贵宾犬主人</strong>
              <span>洗剪造型</span>
            </div>
            <div class="review-stars" aria-label="五星好评">★★★★★</div>
            <p>造型修得很自然，没有剪得太短。预约时间控制得不错，到店不用久等，护理区也比较干净透明。</p>
            <div class="review-meta">2026.03.27 · 造型满意</div>
          </article>
        </div>
      </div>
    </section>

    <section class="visit" id="visit">
      <div class="wrap">
        <div class="section-head">
          <h2>到店信息</h2>
          <p>建议提前 10 分钟到店，让宠物先熟悉环境。疫苗期、术后恢复期请先咨询。</p>
        </div>
        <div class="visit-panel">
          <div class="visit-grid">
            <div class="visit-item"><strong>营业时间</strong><span>周一至周日 10:00 - 20:30</span></div>
            <div class="visit-item"><strong>门店地址</strong><span>上海市宜川路街道陕西北路1620号</span></div>
            <div class="visit-item"><strong>联系电话</strong><span>021-8888 6620 / 微信同号</span></div>
          </div>
          <div class="store-map" role="img" aria-label="毛绒星球宠物洗护门店地图，地址为上海市宜川路街道陕西北路1620号">
            <span class="map-road main"></span>
            <span class="map-road side"></span>
            <span class="map-road lane"></span>
            <span class="map-park" aria-hidden="true"></span>
            <span class="map-building shop-block" aria-hidden="true"></span>
            <span class="map-building tower" aria-hidden="true"></span>
            <span class="map-building bottom" aria-hidden="true"></span>
            <span class="map-metro" aria-hidden="true"></span>
            <span class="map-label block">16栋</span>
            <span class="map-label rail">沪宁城际铁路</span>
            <span class="map-label road">远景路</span>
            <span class="map-label metro">3号线</span>
            <span class="map-label entry">2号门</span>
            <span class="map-paw one" aria-hidden="true">
              <svg viewBox="0 0 64 56"><circle cx="18" cy="18" r="8"/><circle cx="32" cy="12" r="8"/><circle cx="46" cy="18" r="8"/><circle cx="22" cy="33" r="7"/><path d="M32 28c11 0 20 9 20 18 0 7-7 9-12 6-4-2-7-3-8-3s-4 1-8 3c-5 3-12 1-12-6 0-9 9-18 20-18z"/></svg>
            </span>
            <span class="map-paw two" aria-hidden="true">
              <svg viewBox="0 0 64 56"><circle cx="18" cy="18" r="8"/><circle cx="32" cy="12" r="8"/><circle cx="46" cy="18" r="8"/><circle cx="22" cy="33" r="7"/><path d="M32 28c11 0 20 9 20 18 0 7-7 9-12 6-4-2-7-3-8-3s-4 1-8 3c-5 3-12 1-12-6 0-9 9-18 20-18z"/></svg>
            </span>
            <div class="map-pin">
              <span class="pin-bubble" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M8 15s1.5 2 4 2 4-2 4-2"/><path d="M7 9h.01"/><path d="M17 9h.01"/><path d="M12 13v-2"/><path d="M9 5c-2 0-4 1.8-4 4.2 0 3.8 3.6 7.3 7 9.8 3.4-2.5 7-6 7-9.8C19 6.8 17 5 15 5c-1.4 0-2.4.7-3 1.6C11.4 5.7 10.4 5 9 5z"/></svg>
              </span>
              <span class="pin-label"><strong>DOUBLE 宠物店</strong><span>上海市宜川路街道<br>陕西北路1620号</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="footer-row">
      <span>© 2026 毛绒星球宠物洗护</span>
      <span>预约制服务 · 猫犬分区 · 温和洗护用品</span>
    </div>
  </footer>`;
