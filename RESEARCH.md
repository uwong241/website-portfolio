# RESEARCH - osu!-Inspired Interaction & Advanced Motion

## 1. Design Language Inspired by osu!
- **Rhythm & Precision**: Tông màu năng động (accent đỏ/hồng/xanh dương mạnh mẽ), vòng tròn định hướng (approach rings) và điểm tâm nhạy bén.
- **Custom Cursor System**: Kết hợp 2 lớp (Center point + Outer lerp ring) tạo cảm giác phản hồi tức thì (low-latency feedback) mà không gây giật lag CPU.
- **Micro-interactions**: Phản hồi trực quan khi hover qua các target, button hoặc card dự án.

## 2. Performance & Accessibility Considerations
- **RequestAnimationFrame**: Sử dụng `requestAnimationFrame` cho việc lerp mượt mà outer ring thay vì cập nhật state React liên tục ở mỗi event `mousemove` của trung tâm.
- **Touch Device Safety**: Tự động vô hiệu hóa custom cursor trên các thiết bị cảm ứng (`pointer: coarse`) để tránh trải nghiệm tồi.
- **Reduced Motion Support**: Tôn trọng `prefers-reduced-motion` bằng cách tối giản hiệu ứng cursor hoặc ẩn bớt các animation phức tạp khi user yêu cầu.
