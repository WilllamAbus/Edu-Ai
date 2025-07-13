import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600">
        <div>
          <h3 className="font-semibold mb-4">EduAI</h3>
          <ul className="space-y-2">
            <li>Giới thiệu</li>
            <li>Điều khoản</li>
            <li>Chính sách bảo mật</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Hỗ trợ</h3>
          <ul className="space-y-2">
            <li>Trung tâm hỗ trợ</li>
            <li>Liên hệ</li>
            <li>Câu hỏi thường gặp</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Thanh toán</h3>
          <ul className="space-y-2">
            <li>Visa</li>
            <li>MasterCard</li>
            <li>Momo, ZaloPay</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Theo dõi chúng tôi</h3>
          <ul className="space-y-2">
            <li>Facebook</li>
            <li>Zalo</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>

      <div className="border-t text-center py-4 text-xs text-gray-500">
        © 2025 EduAI. Bản quyền thuộc về nhóm phát triển.
      </div>
    </footer>
  );
}
