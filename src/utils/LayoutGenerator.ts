import { LayoutConfig } from '../types';

export class LayoutGenerator {
  constructor(private config: LayoutConfig) {}

  // 布局 1: 经典垂直堆叠布局
  generateCouponLayout1(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: white;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
          <span style="color: #ff4d4f; font-size: 24px; font-weight: bold;">50% 6,000원</span>
          <span style="color: #1890ff; font-size: 16px;">5% 추가 혜택, 최대 ₩1000 할인</span>
        </div>
        <div style="color: #666; font-size: 14px;">Coupon applied, save 6000원</div>
        <div style="color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</div>
      </div>
    `;
  }

  // 布局 2: 两列布局
  generateCouponLayout2(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: white;
        border-radius: 8px;
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 16px;
        align-items: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <span style="color: #ff4d4f; font-size: 24px; font-weight: bold;">50% 6,000원</span>
          <span style="color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <span style="color: #1890ff; font-size: 16px;">5% 추가 혜택, 최대 ₩1000 할인</span>
          <span style="color: #666; font-size: 14px;">Coupon applied, save 6000원</span>
        </div>
      </div>
    `;
  }

  // 布局 3: 价格突出布局
  generateCouponLayout3(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: white;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 24px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="
          padding: 16px;
          background: #fff1f0;
          border-radius: 8px;
          color: #ff4d4f;
          font-size: 24px;
          font-weight: bold;
        ">50% 6,000원</div>
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <span style="color: #1890ff; font-size: 16px;">5% 추가 혜택, 최대 ₩1000 할인</span>
          <span style="color: #666; font-size: 14px;">Coupon applied, save 6000원</span>
          <span style="color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</span>
        </div>
      </div>
    `;
  }

  // 布局 4: 网格布局
  generateCouponLayout4(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: white;
        border-radius: 8px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        gap: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="grid-column: 1; grid-row: 1; color: #ff4d4f; font-size: 24px; font-weight: bold;">50% 6,000원</div>
        <div style="grid-column: 2; grid-row: 1; color: #1890ff; font-size: 16px;">5% 추가 혜택, 최대 ₩1000 할인</div>
        <div style="grid-column: 1; grid-row: 2; color: #666; font-size: 14px;">Coupon applied, save 6000원</div>
        <div style="grid-column: 2; grid-row: 2; color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</div>
      </div>
    `;
  }

  // 布局 5: 分隔线布局
  generateCouponLayout5(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: white;
        border-radius: 8px;
        display: flex;
        gap: 20px;
        align-items: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="display: flex; flex-direction: column; gap: 8px; padding-right: 20px; border-right: 1px solid #eee;">
          <span style="color: #ff4d4f; font-size: 24px; font-weight: bold;">50% 6,000원</span>
          <span style="color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <span style="color: #1890ff; font-size: 16px;">5% 추가 혜택, 최대 ₩1000 할인</span>
          <span style="color: #666; font-size: 14px;">Coupon applied, save 6000원</span>
        </div>
      </div>
    `;
  }

  // 布局 6: 卡片式布局
  generateCouponLayout6(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: white;
        border-radius: 8px;
        display: flex;
        gap: 16px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="
          flex: 1;
          background: #f8f8f8;
          border-radius: 8px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        ">
          <span style="color: #ff4d4f; font-size: 24px; font-weight: bold;">50% 6,000원</span>
          <span style="color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</span>
        </div>
        <div style="
          flex: 1;
          background: #f0f5ff;
          border-radius: 8px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        ">
          <span style="color: #1890ff; font-size: 16px;">5% 추가 혜택, 최대 ₩1000 할인</span>
          <span style="color: #666; font-size: 14px;">Coupon applied, save 6000원</span>
        </div>
      </div>
    `;
  }

  // 布局 7: 标签式布局
  generateCouponLayout7(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: white;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="
            background: #ff4d4f;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 24px;
            font-weight: bold;
          ">50% 6,000원</div>
          <div style="
            background: #e6f7ff;
            color: #1890ff;
            padding: 6px 12px;
            border-radius: 16px;
            font-size: 16px;
          ">5% 추가 혜택, 최대 ₩1000 할인</div>
        </div>
        <div style="padding-left: 8px;">
          <div style="color: #666; font-size: 14px;">Coupon applied, save 6000원</div>
          <div style="color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</div>
        </div>
      </div>
    `;
  }

  // 布局 8: 渐变背景布局
  generateCouponLayout8(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: linear-gradient(135deg, #fff0f0 0%, #fff 100%);
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="display: flex; flex-direction: column; justify-content: center; gap: 8px;">
          <span style="color: #ff4d4f; font-size: 24px; font-weight: bold;">50% 6,000원</span>
          <span style="color: #666; font-size: 14px;">Coupon applied, save 6000원</span>
        </div>
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-end; gap: 8px;">
          <span style="color: #1890ff; font-size: 16px;">5% 추가 혜택, 최대 ₩1000 할인</span>
          <span style="color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</span>
        </div>
      </div>
    `;
  }

  // 布局 9: 圆角分区布局
  generateCouponLayout9(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: white;
        border-radius: 8px;
        display: flex;
        gap: 16px;
        position: relative;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="
          position: absolute;
          top: 0;
          left: 0;
          width: 8px;
          height: 100%;
          background: #ff4d4f;
        "></div>
        <div style="padding-left: 12px;">
          <div style="color: #ff4d4f; font-size: 24px; font-weight: bold; margin-bottom: 8px;">50% 6,000원</div>
          <div style="color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</div>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
          <div style="color: #1890ff; font-size: 16px; margin-bottom: 4px;">5% 추가 혜택, 최대 ₩1000 할인</div>
          <div style="color: #666; font-size: 14px;">Coupon applied, save 6000원</div>
        </div>
      </div>
    `;
  }

  // 布局 10: 强调框布局
  generateCouponLayout10(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: white;
        border-radius: 8px;
        border: 2px solid #ff4d4f;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="
            color: #ff4d4f;
            font-size: 24px;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 8px;
          ">
            <span>50% 6,000원</span>
            <span style="
              background: #fff1f0;
              padding: 4px 8px;
              border-radius: 4px;
              font-size: 14px;
            ">SAVE</span>
          </div>
          <div style="color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="color: #1890ff; font-size: 16px;">5% 추가 혜택, 최대 ₩1000 할인</div>
          <div style="color: #666; font-size: 14px;">Coupon applied, save 6000원</div>
        </div>
      </div>
    `;
  }
  // 布局 11: 现代卡片布局
  generateCouponLayout11(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: white;
        border-radius: 16px;
        display: flex;
        position: relative;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      ">
        <div style="
          position: absolute;
          top: -20px;
          left: -20px;
          width: 120px;
          height: 120px;
          background: #fff1f0;
          border-radius: 50%;
        "></div>
        <div style="
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 24px;
          flex: 1;
        ">
          <div style="
            font-size: 28px;
            font-weight: bold;
            color: #ff4d4f;
            margin-bottom: 8px;
          ">50% 6,000원</div>
          <div style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          ">
            <span style="color: #1890ff; font-size: 16px;">5% 추가 혜택, 최대 ₩1000 할인</span>
            <span style="color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</span>
          </div>
        </div>
      </div>
    `;
  }

  // 布局 12: 高级标签布局
  generateCouponLayout12(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: white;
        border-radius: 8px;
        display: flex;
        gap: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="
          background: #ff4d4f;
          padding: 16px;
          border-radius: 8px;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-width: 140px;
        ">
          <div style="font-size: 32px; font-weight: bold;">50%</div>
          <div style="font-size: 20px;">6,000원</div>
        </div>
        <div style="
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        ">
          <div style="
            color: #1890ff;
            font-size: 16px;
            margin-bottom: 8px;
          ">5% 추가 혜택, 최대 ₩1000 할인</div>
          <div style="
            display: flex;
            justify-content: space-between;
          ">
            <span style="color: #666; font-size: 14px;">Coupon applied, save 6000원</span>
            <span style="color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</span>
          </div>
        </div>
      </div>
    `;
  }

  // 布局 13: 最小主义布局
  generateCouponLayout13(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: #fafafa;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid #eee;
      ">
        <div style="
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 12px;
        ">
          <span style="
            font-size: 24px;
            font-weight: bold;
            color: #ff4d4f;
          ">50% 6,000원</span>
          <span style="
            color: #1890ff;
            font-size: 16px;
          ">5% 추가 혜택</span>
        </div>
        <div style="
          display: flex;
          justify-content: space-between;
          color: #666;
          font-size: 14px;
        ">
          <span>Coupon applied, save 6000원</span>
          <span style="color: #999; text-decoration: line-through;">원가 12,000원</span>
        </div>
      </div>
    `;
  }

  // 布局 14: 对角线布局
  generateCouponLayout14(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: white;
        border-radius: 8px;
        position: relative;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 60px 60px 0;
          border-color: transparent #ff4d4f transparent transparent;
        "></div>
        <div style="
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        ">
          <div style="
            color: #ff4d4f;
            font-size: 24px;
            font-weight: bold;
          ">50% 6,000원</div>
          <div style="
            color: #1890ff;
            font-size: 16px;
          ">5% 추가 혜택, 최대 ₩1000 할인</div>
          <div style="
            display: flex;
            justify-content: space-between;
          ">
            <span style="color: #666; font-size: 14px;">Coupon applied, save 6000원</span>
            <span style="color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</span>
          </div>
        </div>
      </div>
    `;
  }

  // 布局 15: 现代分隔布局
  generateCouponLayout15(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: white;
        border-radius: 8px;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        gap: 20px;
        align-items: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="
          display: flex;
          flex-direction: column;
          gap: 8px;
        ">
          <span style="color: #ff4d4f; font-size: 24px; font-weight: bold;">50% 6,000원</span>
          <span style="color: #666; font-size: 14px;">Coupon applied, save 6000원</span>
        </div>
        <div style="
          width: 1px;
          height: 60%;
          background: linear-gradient(to bottom, transparent, #eee, transparent);
        "></div>
        <div style="
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-end;
        ">
          <span style="color: #1890ff; font-size: 16px;">5% 추가 혜택, 최대 ₩1000 할인</span>
          <span style="color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</span>
        </div>
      </div>
    `;
  }
  // 布局 16: 折扣标签布局
  generateCouponLayout16(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: white;
        border-radius: 8px;
        display: flex;
        position: relative;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="
          position: absolute;
          top: -30px;
          left: -30px;
          width: 100px;
          height: 100px;
          background: #ff4d4f;
          transform: rotate(45deg);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <span style="
            color: white;
            transform: rotate(-45deg);
            font-weight: bold;
            font-size: 18px;
            margin-top: 45px;
            margin-left: 10px;
          ">50%</span>
        </div>
        <div style="
          flex: 1;
          padding: 16px 16px 16px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        ">
          <div style="
            color: #ff4d4f;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 8px;
          ">6,000원</div>
          <div style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          ">
            <span style="color: #1890ff; font-size: 16px;">5% 추가 혜택, 최대 ₩1000 할인</span>
            <span style="color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</span>
          </div>
        </div>
      </div>
    `;
  }

  // 布局 17: 高级渐变布局
  generateCouponLayout17(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: linear-gradient(135deg, #fff5f5 0%, #fff 50%, #f0f5ff 100%);
        border-radius: 8px;
        display: flex;
        align-items: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="
          padding: 0 24px;
          border-right: 2px solid rgba(255,77,79,0.1);
          text-align: center;
        ">
          <div style="color: #ff4d4f; font-size: 32px; font-weight: bold;">50%</div>
          <div style="color: #ff4d4f; font-size: 20px;">6,000원</div>
        </div>
        <div style="
          flex: 1;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        ">
          <div style="color: #1890ff; font-size: 16px;">5% 추가 혜택, 최대 ₩1000 할인</div>
          <div style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          ">
            <span style="color: #666; font-size: 14px;">Coupon applied, save 6000원</span>
            <span style="color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</span>
          </div>
        </div>
      </div>
    `;
  }

  // 布局 18: 阴影分割布局
  generateCouponLayout18(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: white;
        border-radius: 8px;
        display: flex;
        position: relative;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 24px;
          position: relative;
        ">
          <div style="
            color: #ff4d4f;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 8px;
          ">50% 6,000원</div>
          <div style="color: #666; font-size: 14px;">Coupon applied, save 6000원</div>
        </div>
        <div style="
          width: 20px;
          height: 100%;
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          background: linear-gradient(90deg, rgba(0,0,0,0.03), rgba(0,0,0,0), rgba(0,0,0,0.03));
        "></div>
        <div style="
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 24px;
        ">
          <div style="color: #1890ff; font-size: 16px; margin-bottom: 8px;">5% 추가 혜택, 최대 ₩1000 할인</div>
          <div style="color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</div>
        </div>
      </div>
    `;
  }

  // 布局 19: 立体效果布局
  generateCouponLayout19(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: white;
        border-radius: 8px;
        position: relative;
        box-shadow: 
          0 2px 8px rgba(0,0,0,0.1),
          0 4px 0 #ff4d4f;
      ">
        <div style="
          position: absolute;
          top: 0;
          left: 20px;
          right: 20px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #eee, transparent);
        "></div>
        <div style="
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 24px;
        ">
          <div style="
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 12px;
          ">
            <span style="
              color: #ff4d4f;
              font-size: 24px;
              font-weight: bold;
              text-shadow: 1px 1px 0 rgba(0,0,0,0.1);
            ">50% 6,000원</span>
            <span style="color: #1890ff; font-size: 16px;">5% 추가 혜택</span>
          </div>
          <div style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          ">
            <span style="color: #666; font-size: 14px;">Coupon applied, save 6000원</span>
            <span style="color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</span>
          </div>
        </div>
      </div>
    `;
  }

  // 布局 20: 现代卡片布局
  generateCouponLayout20(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: white;
        border-radius: 8px;
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="
          position: absolute;
          top: 0;
          right: 0;
          width: 160px;
          height: 160px;
          background: radial-gradient(circle at top right, #fff1f0 0%, transparent 70%);
        "></div>
        <div style="
          flex: 1;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        ">
          <div style="
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 8px;
          ">
            <span style="
              color: #ff4d4f;
              font-size: 24px;
              font-weight: bold;
            ">50% 6,000원</span>
            <span style="
              background: #ff4d4f;
              color: white;
              padding: 2px 8px;
              border-radius: 12px;
              font-size: 12px;
            ">LIMITED</span>
          </div>
          <div style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          ">
            <span style="color: #1890ff; font-size: 16px;">5% 추가 혜택, 최대 ₩1000 할인</span>
            <span style="color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</span>
          </div>
        </div>
      </div>
    `;
  }

  // 布局 21: 波浪分隔布局
  generateCouponLayout21(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: white;
        border-radius: 8px;
        display: flex;
        position: relative;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="
          position: absolute;
          left: 50%;
          top: 20px;
          bottom: 20px;
          width: 1px;
          background: repeating-linear-gradient(
            to bottom,
            #eee 0px,
            #eee 4px,
            transparent 4px,
            transparent 8px
          );
        "></div>
        <div style="
          flex: 1;
          padding-right: 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        ">
          <div style="
            color: #ff4d4f;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 8px;
          ">50% 6,000원</div>
          <div style="color: #666; font-size: 14px;">Coupon applied, save 6000원</div>
        </div>
        <div style="
          flex: 1;
          padding-left: 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        ">
          <div style="color: #1890ff; font-size: 16px;">5% 추가 혜택, 최대 ₩1000 할인</div>
          <div style="color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</div>
        </div>
      </div>
    `;
  }

  // 布局 22: 高光边框布局
  generateCouponLayout22(): string {
    return `
      <div style="
        width: 330px;
        height: 122px;
        padding: ${this.config.padding}px;
        background: white;
        border-radius: 8px;
        position: relative;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="
          position: absolute;
          inset: 0;
          border-radius: 8px;
          padding: 1px;
          background: linear-gradient(45deg, #ff4d4f, #1890ff);
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        "></div>
        <div style="
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 24px;
        ">
          <div style="
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 12px;
          ">
            <span style="color: #ff4d4f; font-size: 24px; font-weight: bold;">50% 6,000원</span>
            <span style="color: #1890ff; font-size: 16px;">5% 추가 혜택</span>
          </div>
          <div style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          ">
            <span style="color: #666; font-size: 14px;">Coupon applied, save 6000원</span>
            <span style="color: #999; font-size: 12px; text-decoration: line-through;">원가 12,000원</span>
          </div>
        </div>
      </div>
  `;
  }
} // 类的结束括号应该在这里，所有布局方法之后