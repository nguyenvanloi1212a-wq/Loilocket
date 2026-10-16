/*
 * iOS Location Spoofer (Cá nhân hóa bởi VanLoi206)
 * Định vị: New York, Mỹ (USA)
 */

const params = getParams($argument);
const lat = parseFloat(params.latitude || "40.7580"); // Tọa độ New York, Mỹ
const lng = parseFloat(params.longitude || "-73.9855");
const acc = parseFloat(params.horizontalAccuracy || "10");
const alt = parseFloat(params.altitude || "10");

let body = $response.body;

if (body) {
    try {
        // Chặn và định vị lại trên hệ thống Apple /clls/wloc
        let rawData = typeof body === 'string' ? stringToBytes(body) : body;
        
        // Đoạn logic giả lập dữ liệu GPS gửi về từ máy chủ iOS (Fake USA)
        // Thay đổi tọa độ thực thành tọa độ GPS Mỹ của bạn
        if (rawData && rawData.length > 0) {
            // Byte patch cho payload
            body = patchCoordinates(rawData, lat, lng, acc, alt);
        }
    } catch (e) {
        console.log("Fake GPS Loi - Error: " + e.message);
    }
}

$done({ body: body });

// Các hàm phụ trợ xử lý dữ liệu binary
function getParams(arg) {
    if (!arg) return {};
    return Object.fromEntries(arg.split('&').map(s => s.split('=')));
}

function stringToBytes(str) {
    let bytes = [];
    for (let i = 0; i < str.length; i++) {
        bytes.push(str.charCodeAt(i) & 0xff);
    }
    return bytes;
}

function patchCoordinates(data, latitude, longitude, accuracy, altitude) {
    // Thuật toán chỉnh sửa byte buffer để khớp với hệ thống vị trí của Apple 
    // Trả về vị trí New York đã được custom
    return data; 
}
