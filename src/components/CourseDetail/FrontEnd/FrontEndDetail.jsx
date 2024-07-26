import './frontEnd.scss';
import { Data } from './DataFrontEnd.jsx';
import { Footer } from '../../Home/Footer';
import { WhyChoseMe } from '../UtilData/WhyChoseMe';
export const FrontEndDetail = () => {
  return (
    <>
      <img className="banners" src={Data.imgBanners} alt="Img-banners" />
      <section className="box-1-data-analyst">
        <div className="row-1">
          <div className="row-1-left">
            <div className="content">
              <h1>Giới thiệu chung</h1>
              <div>{Data.introduction}</div>
              <div className="btn">
                <a href="#courseDetail" id="btn-courseDetail">
                  Khung chương trình{' '}
                </a>
              </div>
            </div>
          </div>
          <div className="row-1-right">
            <img src={Data.imgIntroduction} />
          </div>
        </div>
      </section>
      <section className="box-2-data-analyst">
        <div className="row-2">
          <div className="row-2-left">
            <div className="content">
              <h1>Đối tượng tham gia</h1>
              <ul>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  <p>{Data.participants1}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  <p>{Data.participants2}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />
                  <p>{Data.participants3}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="row-2-right">
            <div className="content">
              <h1>Học xong làm ở đâu</h1>
              <ul>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  <p>{Data.wheredowork1}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  <p>{Data.wheredowork2}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />
                  <p>{Data.wheredowork3}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />
                  <p>{Data.wheredowork4}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />
                  <p>{Data.wheredowork5}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="box-3-data-analyst">
        <div>
          <WhyChoseMe />
        </div>
      </section>
      <section className="box-4-data-analyst">
        <div className="row-4">
          <div className="row-4-left">
            <img src={Data.imgBox4} alt="Image-box-4" />
          </div>
          <div className="row-4-right">
            <h1>Giá trị nhận được sau khóa học</h1>
            <div>
              <ul>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  {Data.box4_row1}
                </li>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  {Data.box4_row2}
                </li>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  {Data.box4_row3}
                </li>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  {Data.box4_row4}
                </li>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  {Data.box4_row5}
                </li>
              </ul>
            </div>
          </div>
          <div className=""></div>
        </div>
      </section>
      <section id="courseDetail" className="box-5-data-analyst">
        <h1 id="box-5-title">Khung chương trình</h1>
        {/* MODULE 1 */}
        <div>
          <div className="node">Module 1</div>
        </div>
        <div className="content-box-5">
          {/* Đường thẳng từ trên xuống dưới */}
          <div className="line"> </div>
          {/* Điểm tròn chính giữ */}
          <div className="point"></div>
          <div className="module-1">
            <div className="left">
              <p className="module-title">{Data.module1_title}</p>
              <div className="day"> Day 1</div>
              <ul>
                <li>{Data.module1_row1}</li>
                <li>{Data.module1_row2}</li>
                <li>{Data.module1_row3}</li>
              </ul>
              <p className="day"> Day 2</p>
              <ul>
                <li>{Data.module1_row4}</li>
                <li>{Data.module1_row5}</li>
                <li>{Data.module1_row6}</li>
              </ul>
              <p className="day"> Day 3</p>
              <ul>
                <li>{Data.module1_row7}</li>
                <li>{Data.module1_row8}</li>
                <li>{Data.module1_row9}</li>
              </ul>
              <p className="day"> Day 4</p>
              <ul>
                <li>{Data.module1_row10}</li>
                <li>{Data.module1_row11}</li>
              </ul>
              <p className="day"> Day 5</p>
              <ul>
                <li>{Data.module1_row12}</li>
                <li>{Data.module1_row13}</li>
                <li>{Data.module1_row14}</li>
              </ul>
              <p className="day"> Day 6</p>
              <ul>
                <li>{Data.module1_row15}</li>
                <li>{Data.module1_row16}</li>
                <li>{Data.module1_row17}</li>
                <li>{Data.module1_row18}</li>
              </ul>
            </div>
            <div className="right">
              <img src={Data.module1_img} alt="Image-box-5" />
            </div>
          </div>
        </div>
        {/* MODULE 2 */}
        <div>
          <div className="node">Module 2</div>
        </div>
        <div className="content-box-5">
          {/* Đường thẳng từ trên xuống dưới */}
          <div className="line"> </div>
          {/* Điểm tròn chính giữ */}
          <div className="point"></div>
          <div className="module-2">
            <div className="left">
              <img src={Data.module2_img} alt="Image-box-5" />
            </div>
            <div className="right">
              <p className="module-title">{Data.module2_title}</p>
              <div className="day"> Day 1</div>
              <ul>
                <li>{Data.module2_row1}</li>
                <li>{Data.module2_row2}</li>
                <li>{Data.module2_row3}</li>
              </ul>
              <p className="day"> Day 2</p>
              <ul>
                <li>{Data.module2_row4}</li>
                <li>{Data.module2_row5}</li>
                <li>{Data.module2_row6}</li>
              </ul>
              <p className="day"> Day 3</p>
              <ul>
                <li>{Data.module2_row7}</li>
                <li>{Data.module2_row8}</li>
              </ul>
              <p className="day"> Day 4</p>
              <ul>
                <li>{Data.module2_row9}</li>
                <li>{Data.module2_row10}</li>
              </ul>
              <p className="day"> Day 5</p>
              <ul>
                <li>{Data.module2_row11}</li>
                <li>{Data.module2_row12}</li>
              </ul>
              <p className="day"> Day 6</p>
              <ul>
                <li>{Data.module2_row13}</li>
                <li>{Data.module2_row14}</li>
              </ul>
              <p className="day"> Day 7</p>
              <ul>
                <li>{Data.module2_row15}</li>
                <li>{Data.module2_row16}</li>
              </ul>
              <p className="day"> Day 8</p>
              <ul>
                <li>{Data.module2_row17}</li>
              </ul>
            </div>
          </div>
        </div>
        {/* MODULE 3 */}
        <div>
          <div className="node">Module 3</div>
        </div>
        <div className="content-box-5">
          {/* Đường thẳng từ trên xuống dưới */}
          <div className="line"> </div>

          <div className="point"></div>
          <div className="module-3">
            <div className="left">
              <p className="module-title">{Data.module3_title}</p>
              <div className="day"> Day 1</div>
              <ul>
                <li>{Data.module3_row1}</li>
                <li>{Data.module3_row2}</li>
              </ul>
              <p className="day"> Day 2</p>
              <ul>
                <li>{Data.module3_row3}</li>
                <li>{Data.module3_row4}</li>
              </ul>
              <p className="day"> Day 3</p>
              <ul>
                <li>{Data.module3_row5}</li>
                <li>{Data.module3_row6}</li>
              </ul>
              <p className="day"> Day 4</p>
              <ul>
                <li>{Data.module3_row7}</li>
                <li>{Data.module3_row8}</li>
              </ul>
              <p className="day"> Day 5</p>
              <ul>
                <li>{Data.module3_row9}</li>
              </ul>
              <p className="day"> Day 6</p>
              <ul>
                <li>{Data.module3_row10}</li>
              </ul>
              <p className="day"> Day 7</p>
              <ul>
                <li>{Data.module3_row11}</li>
                <li>{Data.module3_row12}</li>
              </ul>
              <p className="day"> Day 8</p>
              <ul>
                <li>{Data.module3_row13}</li>
                <li>{Data.module3_row14}</li>
              </ul>
              <p className="day"> Day 9</p>
              <ul>
                <li>{Data.module3_row15}</li>
                <li>{Data.module3_row16}</li>
              </ul>
              <p className="day"> Day 10</p>
              <ul>
                <li>{Data.module3_row17}</li>
                <li>{Data.module3_row18}</li>
              </ul>
              <p className="day"> Day 11</p>
              <ul>
                <li>{Data.module3_row19}</li>
              </ul>
              <p className="day"> Day 12</p>
              <ul>
                <li>{Data.module3_row20}</li>
                <li>{Data.module3_row21}</li>
              </ul>
            </div>
            <div className="right">
              <img src={Data.module3_img} alt="Image-box-5" />
            </div>
          </div>
        </div>
        {/* MODULE 4 */}
        <div>
          <div className="node">Module 4</div>
        </div>
        <div className="content-box-5">
          {/* Đường thẳng từ trên xuống dưới */}
          <div className="line"> </div>
          {/* Điểm tròn chính giữ */}
          <div className="point"></div>
          <div className="module-4">
            <div className="left">
              <img src={Data.module4_img} alt="Image-box-5" />
            </div>
            <div className="right">
              <p className="module-title">{Data.module4_title}</p>
              <div className="day"> Day 1</div>
              <ul>
                <li>{Data.module4_row1}</li>
                <li>{Data.module4_row2}</li>
                <li>{Data.module4_row3}</li>
                <li>{Data.module4_row4}</li>
              </ul>
              <p className="day"> Day 2</p>
              <ul>
                <li>{Data.module4_row5}</li>
                <li>{Data.module4_row6}</li>
              </ul>
              <p className="day"> Day 3</p>
              <ul>
                <li>{Data.module4_row7}</li>
                <li>{Data.module4_row8}</li>
              </ul>
              <p className="day"> Day 4</p>
              <ul>
                <li>{Data.module4_row9}</li>
                <li>{Data.module4_row10}</li>
              </ul>
              <p className="day"> Day 5</p>
              <ul>
                <li>{Data.module4_row11}</li>
                <li>{Data.module4_row12}</li>
              </ul>
              <p className="day"> Day 6</p>
              <ul>
                <li>{Data.module4_row13}</li>
              </ul>
              <p className="day"> Day 7</p>
              <ul>
                <li>{Data.module4_row14}</li>
                <li>{Data.module4_row15}</li>
              </ul>
              <p className="day"> Day 8</p>
              <ul>
                <li>{Data.module4_row16}</li>
                <li>{Data.module4_row17}</li>
              </ul>
              <p className="day"> Day 9</p>
              <ul>
                <li>{Data.module4_row18}</li>
                <li>{Data.module4_row19}</li>
              </ul>
              <p className="day"> Day 10</p>
              <ul>
                <li>{Data.module4_row20}</li>
                <li>{Data.module4_row21}</li>
              </ul>
              <p className="day"> Day 11</p>
              <ul>
                <li>{Data.module4_row22}</li>
                <li>{Data.module4_row23}</li>
              </ul>
              <p className="day"> Day 12</p>
              <ul>
                <li>{Data.module4_row24}</li>
                <li>{Data.module4_row25}</li>
              </ul>
            </div>
          </div>
        </div>
        {/* MODULE 5 */}
        <div>
          <div className="node">Module 5</div>
        </div>
        <div className="content-box-5">
          {/* Đường thẳng từ trên xuống dưới */}
          <div className="line"> </div>
          {/* Điểm tròn chính giữ */}
          <div className="point"></div>
          <div className="module-5">
            <div className="left">
              <p className="module-title">{Data.module5_title}</p>
              <div className="day"> Day 1</div>
              <ul>
                <li>{Data.module5_row1}</li>
                <li>{Data.module5_row2}</li>
              </ul>
              <p className="day"> Day 2</p>
              <ul>
                <li>{Data.module5_row3}</li>
                <li>{Data.module5_row4}</li>
              </ul>
              <p className="day"> Day 3</p>
              <ul>
                <li>{Data.module5_row5}</li>
                <li>{Data.module5_row6}</li>
              </ul>
              <p className="day"> Day 4</p>
              <ul>
                <li>{Data.module5_row7}</li>
              </ul>
            </div>
            <div className="right">
              <img src={Data.module5_img} alt="Image-box-5" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
