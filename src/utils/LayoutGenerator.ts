export class LayoutGenerator {
    // 布局 1: 经典垂直堆叠布局
    generateCouponLayout1(): string {
      return `
        <div style="
          width: 630px;
          height: 122px;
          padding: 20px;
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
          width: 630px;
          height: 122px;
          padding: 20px;
          background: white;
          border-radius: 8px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 16px;
          align-items: center;
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
          width: 630px;
          height: 122px;
          padding: 20px;
          background: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 24px;
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
          width: 630px;
          height: 122px;
          padding: 20px;
          background: white;
          border-radius: 8px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 8px;
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
          width: 630px;
          height: 122px;
          padding: 20px;
          background: white;
          border-radius: 8px;
          display: flex;
          gap: 20px;
          align-items: center;
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
          width: 630px;
          height: 122px;
          padding: 20px;
          background: white;
          border-radius: 8px;
          display: flex;
          gap: 16px;
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
  
    // 继续添加其他布局方案...
  // 布局 7: 标签式布局
  generateCouponLayout7(): string {
    return `
      <div style="
        width: 630px;
        height: 122px;
        padding: 20px;
        background: white;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 12px;
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
        width: 630px;
        height: 122px;
        padding: 20px;
        background: linear-gradient(135deg, #fff0f0 0%, #fff 100%);
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
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
        width: 630px;
        height: 122px;
        padding: 20px;
        background: white;
        border-radius: 8px;
        display: flex;
        gap: 16px;
        position: relative;
        overflow: hidden;
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
        width: 630px;
        height: 122px;
        padding: 20px;
        background: white;
        border-radius: 8px;
        border: 2px solid #ff4d4f;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 12px;
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

} //