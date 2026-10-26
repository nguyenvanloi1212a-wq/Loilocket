// ============================================================
// Script Locket Gold Remote Config Full Suite 2026 (Full 221 Captions)
// Tác giả: Nguyễn Văn Lợi (vanloi206)
// ============================================================

if ($response.body) {
    var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
    var obj = JSON.parse($response.body);

    if (ua.includes("Locket")) {
        obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
        obj.entries = obj.entries || {};

        // 1. CẤU HÌNH GOLD, FEATURE GATES & PAYWALL
        // ============================================================
        Object.assign(obj.entries, {
            feature_gates: JSON.stringify({
                app_icon_picker: "enabled",
                camera_roll: "enabled",
                camera_theme: "enabled",
                locket_views: "enabled",
                long_captions: "enabled",
                longer_video: "enabled",
                unlimited_friends: "enabled",
                priority_support: "enabled",
                profile_badge: "enabled",
                remove_ads: "enabled",
                video: "enabled",
                custom_widget_frames: "enabled",
                streak_recovery: "enabled"
            }),
            upsell_features: JSON.stringify({
                app_icon_picker: true,
                camera_roll: true,
                camera_theme: true,
                locket_views: true,
                remove_ads: true,
                custom_widget_frames: true
            }),
            paywall_presentation_config: JSON.stringify({
                uid: "paywall_testflight",
                onboarding: false,
                after_sent_moment: false,
                on_foreground: false,
                interval: 2592000,
                profile_banner: true
            }),
            feature_discovery_popup_config: JSON.stringify({
                tag: "LOCKET GOLD",
                tag_gradient: true,
                tag_style: "gold_gradient",
                title: "Lên Locket Gold rồi đó 😎",
                feature_set: [
                    {
                        title: "Mở khóa toàn bộ tính năng ✨",
                        body: "Chúc bạn có trải nghiệm tuyệt vời! Lợi2006 💛",
                        imageURL: "https://anhmeme.com/anh-meme-meo-cute/"
                    }
                ],
                primary_button_title: "Xong",
                campaign: "locket_gold_welcome_v3",
                start_at: "2020-01-01T00:00:00",
                end_at: "2099-12-31T23:59:59",
                use_local_time_zone: true
            }),
            android_subscribe_gold_button_enabled: "false",
            profile_badge_visible: "true",
            lunar_new_year_app_icon_enabled: "true"
        });

        // 2. CHẶN QUẢNG CÁO & TẮT TRACKING (SENTRY)
        // ============================================================
        Object.assign(obj.entries, {
            history_ads_mode: "off",
            history_ads_prefetch_count: "0",
            history_ads_prefetch_immediate: "false",
            history_ads_prefetch_reroute: "false",
            history_ads_dynamic_insertion: "false",
            history_ads_refresh_prefetch_on_foreground: "false",
            history_ads_floor_price: "0",
            history_ads_floor_price_att: "0",
            history_ad_log_displayed_on_background: "false",
            history_ads_debug_menu: "false",
            sentry_sample_rate: "0",
            sentry_network_tracing: "false",
            sentry_performance_tracking: "false",
            sentry_trace_sample_rate: "0",
            sentry_profiles_sample_rate: "0"
        });

        // 3. CAMERA, VIDEO, FILTERS & UPLOAD QUALITY
        // ============================================================
        Object.assign(obj.entries, {
            camera: JSON.stringify({
                gold_max_duration: 120.0,
                goldMaxDuration: 120.0,
                max_duration: 120.0,
                maxDuration: 120.0,
                ultra_wide: true,
                ultraWide: true,
                volume_button: true,
                volumeButton: true,
                flash_button: true,
                telephoto: true,
                srgb: true,
                lanczos: true,
                quality_mbps: 0.9,
                qualityMbps: 0.9
            }),
            camera_roll: JSON.stringify({
                gold_max_duration: 120.0,
                goldMaxDuration: 120.0,
                video_max_duration: 120.0,
                videoMaxDuration: 120.0,
                max_duration: 120.0,
                maxDuration: 120.0,
                trim_max_duration: 120.0,
                trimMaxDuration: 120.0,
                camera_roll_max_duration: 120.0,
                quality_mbps: 0.9,
                qualityMbps: 0.9,
                flash_button: true
            }),
            live_photos: JSON.stringify({
                capture: true,
                viewing: true,
                catch_up: true,
                widget_looping_mode: "never"
            }),
            camera_filter_config: JSON.stringify({
                allows_custom_filters: true,
                show_filter_button: true,
                sheet_enabled: true,
                open_sheet_immediately: true,
                sheet_filters: [
                    { title: { en: "Goofy" }, filter_ids: ["okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows"] },
                    { title: { en: "Looks" }, filter_ids: ["bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns", "tatted", "mohawk", "braces", "bye_brows"] },
                    { title: { en: "Celebrate" }, filter_ids: ["slimed", "princess", "disco_lights", "cash_money", "happy_birthday"] },
                    { title: { en: "Cute" }, filter_ids: ["cutesy", "sticker_face", "flower_crown", "love_bug"] },
                    { title: { en: "Costumes" }, filter_ids: ["wedding", "cowboy_cowgirl", "giraffe", "clown"] },
                    { title: { en: "Holidays" }, filter_ids: ["easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun", "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"] }
                ],
                picker_filters: [
                    "okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows",
                    "bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns",
                    "tatted", "mohawk", "braces", "slimed", "princess",
                    "disco_lights", "cash_money", "happy_birthday", "cutesy", "sticker_face",
                    "flower_crown", "love_bug", "wedding", "cowboy_cowgirl", "giraffe",
                    "clown", "easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun",
                    "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"
                ]
            }),
            camera_roll_preview_enabled: "true",
            camera_roll_video_enabled: "true",
            camera_roll_video_upload_enabled: "true",
            internal_camera_roll_video_upload_enabled: "true",
            longer_camera_roll_videos_enabled: "true",
            camera_roll_video_max_duration: "120.0",
            camera_roll_max_duration: "120.0",
            camera_roll_duration: "120.0",
            max_video_duration: "120.0",
            video_max_duration: "120.0",
            video_trim_max_duration: "120.0",
            trim_max_duration: "120.0",
            gold_max_duration: "120.0",
            goldMaxDuration: "120.0",
            video_quality_mbps: "0.9",
            video_sound_enabled: "true",
            microphone_enabled: "true",
            camera_microphone_enabled: "true",
            audio_session_deactivation_enabled: "true",
            zoom_enabled: "true",
            upload_main: "false",
            upload_main_image_quality: "1.0",
            upload_main_image_size: "1440",
            upload_thumbnail_image_quality: "1.0",
            upload_thumbnail_image_size: "1020"
        });

        // 4. BẠN BÈ, GIỚI HẠN & ĐỀ XUẤT KẾT BẠN
        // ============================================================
        Object.assign(obj.entries, {
            max_friends_count: "999999",
            friend_limit_mode: "0",
            soft_friend_limit_threshold_count: "999999",
            show_friend_limit_on_cam: "false",
            signup_max_friends_count: "999999",
            celebrity_inbox_limit: "999999",
            friend_limit_geo_override: JSON.stringify({ experiments: {}, area_code_overrides: {} }),
            friends_sheet_locket_count_config: JSON.stringify({
                items: [
                    { threshold: 0, icon_name: "heart" },
                    { threshold: 1, icon_name: "heart.fill" },
                    { threshold: 10, emoji: "🤍" },
                    { threshold: 100, emoji: "💛" },
                    { threshold: 500, emoji: "❤️‍🔥" },
                    { threshold: 1000, emoji: "🌟🫶🌟" },
                    { threshold: 2000, emoji: "✨💟✨" },
                    { threshold: 5000, emoji: "⚡️😵‍💫⚡" },
                    { threshold: 10000, emoji: "✨⚡️😱⚡✨" }
                ]
            }),
            friend_locket_count_config: JSON.stringify({
                items: [
                    { threshold: 0, icon_name: "heart" },
                    { threshold: 1, icon_name: "heart.fill" },
                    { threshold: 10, emoji: "🤍" },
                    { threshold: 100, emoji: "💛" },
                    { threshold: 500, emoji: "❤️‍🔥" },
                    { threshold: 1000, emoji: "✨💗✨" },
                    { threshold: 2000, emoji: "✨️⭐️✨" },
                    { threshold: 5000, emoji: "✨💎✨" },
                    { threshold: 10000, emoji: "✨🔐💛✨" }
                ]
            }),
            new_friends_monitoring_enabled: "true",
            improved_friend_suggestions: "true",
            show_friend_suggestions_by_default: "true",
            emoji_friend_suggestions: "true",
            prompt_contact_permissions_on_search: "true",
            populate_phone_numbers_from_suggest_friends: "true",
            hide_friends_enabled: "true",
            hide_invite_links: "false",
            hide_skip_contacts: "true",
            show_all_contacts: "true",
            show_invite_suggestions: "true",
            show_no_friends_bottom_sheet: "false",
            signup_allow_skip_add_friends: "true"
        });

        // 5. MOMENTS, STREAK, CHAT & TƯƠNG TÁC
        // ============================================================
        try {
            var streak = JSON.parse(obj.entries.streak_config || "{}");
            streak.minimum_recovery_count = 0;
            streak.minimum_display_count = 0;
            obj.entries.streak_config = JSON.stringify(streak);
        } catch (e) {}

        Object.assign(obj.entries, {
            moment_views_enabled: "true",
            moment_views_v2: "true",
            record_moment_views: "true",
            notify_moment_views: "true",
            get_moment_views_as_cloud_function: "true",
            moment_reactions_v2: "true",
            chat_reactions_enabled: "true",
            conversation_reactions: "true",
            typing_indicators_enabled: "true",
            unsend_message_enabled: "true",
            reply_prototype_enabled: "true",
            messages_integration: "true",
            conversations_enabled: "true",
            fetch_moments_in_conversation: "true",
            hide_chat_button: "false",
            groups_enabled: "true",
            send_to_self_only_mode: "always_enabled",
            time_travel_rewind_v2_enabled: "true",
            calendar_delete_moment_enabled: "true",
            calendar_rewind_enabled: "false",
            locket_yearbook_story_sharing_encouraged: "true",
            rollcall_enabled: "true",
            rollcall_comment_actions: "true",
            rollcall_profile_button: "true",
            rollcall_prompt_export_after_share: "true",
            rollcall_confirm_skip_tagging: "false",
            rollcall_tap_to_tag_enabled: "false"
        });

        // 6. WIDGET, THÔNG BÁO & GIAO DIỆN (JOURNAL / PROFILE)
        // ============================================================
        Object.assign(obj.entries, {
            widget_frame_event_max_images: "5",
            android_widget_frame_event_enabled: "true",
            widget_badge_enabled: "true",
            widget_badge_v2: "true",
            widget_stale_state_enabled: "false",
            widget_last_sent_indicator: "false",
            widget_sync_token_reload_mode: "clearTokenNever",
            widget_frame_event: JSON.stringify({
                uid: "midautumn_2026",
                url: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
                use_local_time_zone: true,
                placement: "below",
                start_at: "2020-01-01T00:00:00",
                end_at: "2099-12-31T23:59:59"
            }),
            live_activity_onboarding: "true",
            live_activity_onboarding_variant: "friending",
            register_live_activity_push_to_start_token: "true",
            live_activity_remove_stale_start_token: "true",
            notification_preferences_live_activities: "true",
            notification_preferences: "true",
            notification_reply_body_visible: "true",
            prompt_notification_permissions_after_friending: "true",
            activity_bar_enabled: "true",
            journal_activity_bar_enabled: "true",
            journal_settings: JSON.stringify({
                debug_menu_enabled: false,
                focus_animation: true,
                compact_header: true,
                friends_button: true,
                reverse_scroll_direction: false,
                streak_visualization: true,
                streak_visualization_style: "gradient",
                streak_header_minimum_count: 0,
                streak_visualization_minimum_count: 2,
                overlay_indicators: { location: true, music: true, static_content: true, weather: true }
            }),
            qr_code_config: JSON.stringify({ profile_enabled: true, scanning_enabled: true }),
            custom_profile_pics: "true",
            profile_menu_v2_enabled: "true"
        });

        // 7. HỆ THỐNG, CACHE & STORAGE CDN
        // ============================================================
        Object.assign(obj.entries, {
            cdn_domain_replacements: JSON.stringify({
                "firebasestorage.googleapis.com": "cdn.locketcamera.com"
            }),
            cdn_domain_replacements_video: "true",
            storage_bucket: "gs://locket-img",
            storage_bucket_video: "gs://locket-video",
            image_cache_max_age_sec: "157680000",
            image_cache_max_size: "400000000",
            history_cache_age_days: "1000",
            user_cache_max_age_sec: "691200",
            friends_cache_max_age_sec: "2592000",
            image_fetch_cache: "true",
            image_cache_use_shared: "true",
            use_doc_dir_for_image_cache: "true",
            efficient_history_cache_invalidation: "true",
            timestamp_based_history_fetches: "true",
            get_latest_moment_v2: "true",
            fetch_users_from_cloud_function: "true",
            refresh_interval: "60",
            firestore_refresh_v2: "true",
            firestore_refresh_v3: "true",
            keychain_access_retries: "true",
            blocked_users_cached_sync_enabled: "true",
            beta_features_enabled: "true",
            join_testflight_enabled: "true",
            safety_center: "true",
            help_center: "true",
            support_v2: "true",
            privacy_choices_setting: "true",
            request_att_permission: "true",
            invite_link_preview_variant: "4",
            share_history_config: JSON.stringify({ prompt_enabled: false, fetching_enabled: true }),
            share_history_prompt_enabled: "false",
            use_thumbnails_for_sharing: "true",
            use_thumbnails_in_timeline: "true",
            persist_onboarding_step: "true",
            onboarding_contact_permission_step: "true"
        });

        // 8. OVERLAY & CUSTOM CAPTIONS (221 CAPTIONS FULL)
        // ============================================================
        var defaultGeneral = {
            section: "🎨 General",
            items: [
                { overlay_id: "caption:standard", source: "local", caption: { type: "standard" } },
                { overlay_id: "caption:review", source: "local", caption: { type: "review" } },
                { overlay_id: "caption:music", source: "local", caption: { type: "music" } },
                { overlay_id: "caption:location", source: "local", caption: { type: "location" } },
                { overlay_id: "caption:weather", source: "local", caption: { type: "weather" } },
                { overlay_id: "caption:time", source: "local", caption: { type: "time" } },
                { overlay_id: "caption:streak", source: "local", caption: { type: "streak" } },
                { overlay_id: "caption:star_sign", source: "local", caption: { type: "star_sign" } },
                { overlay_id: "caption:poll", source: "local", caption: { type: "poll" } },
                { overlay_id: "caption:color_palette", source: "local", caption: { type: "color_palette" } },
                { overlay_id: "caption:locket_count", source: "local", caption: { type: "locket_count" } }
            ]
        };

        var customSections = [
            {
                section: "🎨 😂 Hài Hước, Vô Tri",
                items: [
                    { overlay_id: "cap:hai_1", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FBC2EB"] }, max_lines: 1, text: "Nhan sắc có hạn, tự tin vô biên 🤡", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:hai_2", source: "remote", caption: { background: { colors: ["#A18CD1", "#FBC2EB"] }, max_lines: 1, text: "Mặt thì tỉnh, đầu thì khùng 🤪", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:hai_3", source: "remote", caption: { background: { colors: ["#FAD0C4", "#FFD1FF"] }, max_lines: 1, text: "Nay đẹp bất thường, mai bình thường lại 😎", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:hai_4", source: "remote", caption: { background: { colors: ["#FFD1FF", "#FEE140"] }, max_lines: 1, text: "Ảnh hơi mờ, tương lai cũng vậy 🌫️", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:hai_5", source: "remote", caption: { background: { colors: ["#FF0844", "#FFB199"] }, max_lines: 1, text: "Không phải báo, nhưng hay báo đời 🐆", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:hai_6", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, max_lines: 1, text: "Đăng ảnh để chứng minh mình chưa mất tích 📸", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:hai_7", source: "remote", caption: { background: { colors: ["#C6FFDD", "#FBD786", "#F7797D"] }, max_lines: 1, text: "Không biết đăng gì nên đăng mình 🐧", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:hai_8", source: "remote", caption: { background: { colors: ["#12C2E9", "#C471ED", "#F64F59"] }, max_lines: 1, text: "Não đang bảo trì, vui lòng quay lại sau 🧠", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:hai_9", source: "remote", caption: { background: { colors: ["#00F2FE", "#4FACFE"] }, max_lines: 1, text: "Cuộc đời là một trò đùa và mình là nhân vật chính 🎭", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:hai_10", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, max_lines: 1, text: "Thôi đăng đại, mai tính tiếp 🤡", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:hai_11", source: "remote", caption: { background: { colors: ["#232526", "#414345"] }, max_lines: 1, text: "Tự tin là chính, thực tế tính sau 🫠", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:hai_12", source: "remote", caption: { background: { colors: ["#8E2DE2", "#4A00E0"] }, max_lines: 1, text: "Miệng bảo ổn, mặt bảo cứu tôi 😭", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:hai_13", source: "remote", caption: { background: { colors: ["#2C3E50", "#4CA1AF"] }, max_lines: 1, text: "Kế hoạch rất hoàn hảo, người thực hiện hơi bất ổn 📋", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:hai_14", source: "remote", caption: { background: { colors: ["#141E30", "#243B55"] }, max_lines: 1, text: "Đầu tư vào bản thân, hiện tại vẫn chưa sinh lời 📉", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:hai_15", source: "remote", caption: { background: { colors: ["#FF512F", "#DD2476"] }, max_lines: 1, text: "Đời mình là bộ phim hài, tiếc là chưa có cát-xê 🎬", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:hai_16", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FBC2EB"] }, max_lines: 1, text: "Sống tích cực nhưng tài khoản tiêu cực 💳", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:hai_17", source: "remote", caption: { background: { colors: ["#A18CD1", "#FBC2EB"] }, max_lines: 1, text: "Ngoại hình là trời cho, thần kinh là tự rèn 🐒", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:hai_18", source: "remote", caption: { background: { colors: ["#FAD0C4", "#FFD1FF"] }, max_lines: 1, text: "Không phải vô tri, chỉ là tri thức đang ngủ 😴", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:hai_19", source: "remote", caption: { background: { colors: ["#FFD1FF", "#FEE140"] }, max_lines: 1, text: "Hướng nội khi gặp người lạ, hướng điên khi gặp người quen 🤪", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:hai_20", source: "remote", caption: { background: { colors: ["#FF0844", "#FFB199"] }, max_lines: 1, text: "Ăn là hạnh phúc, ngủ là đam mê, làm là miễn cưỡng 🛌", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:hai_21", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, max_lines: 1, text: "Sống là phải biết vươn lên, còn vươn tới đâu thì chưa biết 🪜", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:hai_22", source: "remote", caption: { background: { colors: ["#C6FFDD", "#FBD786", "#F7797D"] }, max_lines: 1, text: "Nhìn vậy thôi chứ bên trong cũng không có gì đâu 🫙", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:hai_23", source: "remote", caption: { background: { colors: ["#12C2E9", "#C471ED", "#F64F59"] }, max_lines: 1, text: "Rất muốn giảm cân nhưng cái miệng không cho phép 🍕", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:hai_24", source: "remote", caption: { background: { colors: ["#00F2FE", "#4FACFE"] }, max_lines: 1, text: "Mỏ hỗn nhưng tâm hiền, đời đưa đẩy nên hay phát điên 🕊️", text_color: "#FFFFFFE6", type: "static_content" } }
                ]
            },
            {
                section: "🎨 🎀 Cute, Dễ Thương",
                items: [
                    { overlay_id: "cap:cute_1", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, max_lines: 1, text: "Một chiếc em bé hơi lớn 🐣", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:cute_2", source: "remote", caption: { background: { colors: ["#232526", "#414345"] }, max_lines: 1, text: "Hôm nay cũng ngoan, chắc vậy 🥺", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:cute_3", source: "remote", caption: { background: { colors: ["#8E2DE2", "#4A00E0"] }, max_lines: 1, text: "Bé này hơi bị đáng iu 🧸", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:cute_4", source: "remote", caption: { background: { colors: ["#2C3E50", "#4CA1AF"] }, max_lines: 1, text: "Nay mình dịu dàng như cục bông ☁️", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:cute_5", source: "remote", caption: { background: { colors: ["#141E30", "#243B55"] }, max_lines: 1, text: "Nhìn vậy thôi chứ dễ dụ lắm 🤭", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:cute_6", source: "remote", caption: { background: { colors: ["#FF512F", "#DD2476"] }, max_lines: 1, text: "Đáng yêu là bản năng, không phải cố gắng 🎀", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:cute_7", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FBC2EB"] }, max_lines: 1, text: "Hôm nay cần được cưng chiều 🥹", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:cute_8", source: "remote", caption: { background: { colors: ["#A18CD1", "#FBC2EB"] }, max_lines: 1, text: "Cho bé xin một chiếc ưu tiên 🫶", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:cute_9", source: "remote", caption: { background: { colors: ["#FAD0C4", "#FFD1FF"] }, max_lines: 1, text: "Không khó chiều, chỉ khó hiểu 😌", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:cute_10", source: "remote", caption: { background: { colors: ["#FFD1FF", "#FEE140"] }, max_lines: 1, text: "Bé ổn, nhưng có cậu thì ổn hơn 💕", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:cute_11", source: "remote", caption: { background: { colors: ["#FF0844", "#FFB199"] }, max_lines: 1, text: "Ai ôm bé một cái được không? 🫂", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:cute_12", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, max_lines: 1, text: "Muốn được cưng chứ không muốn trưởng thành 🧸", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:cute_13", source: "remote", caption: { background: { colors: ["#C6FFDD", "#FBD786", "#F7797D"] }, max_lines: 1, text: "Xin vía dễ thương 🐰", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:cute_14", source: "remote", caption: { background: { colors: ["#12C2E9", "#C471ED", "#F64F59"] }, max_lines: 1, text: "Cười một cái cho đời dễ thương 😊", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:cute_15", source: "remote", caption: { background: { colors: ["#00F2FE", "#4FACFE"] }, max_lines: 1, text: "Bao nhiêu hoa hậu trên đời, em đây là hậu đậu 🍓", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:cute_16", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, max_lines: 1, text: "Thế giới 8 tỉ người, nhưng chỉ có một bé xinh xinh này 🐣", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:cute_17", source: "remote", caption: { background: { colors: ["#232526", "#414345"] }, max_lines: 1, text: "Nắng dịu dàng như nụ cười của bé 🌼", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:cute_18", source: "remote", caption: { background: { colors: ["#8E2DE2", "#4A00E0"] }, max_lines: 1, text: "Đừng để sự đáng yêu này đánh lừa 🧸", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:cute_19", source: "remote", caption: { background: { colors: ["#2C3E50", "#4CA1AF"] }, max_lines: 1, text: "Trái đất tròn, em trốn đâu cũng lọt vào mắt anh 🌸", text_color: "#FFFFFF", type: "static_content" } }
                ]
            },
            {
                section: "🎨 💘 Thả Thính, Crush",
                items: [
                    { overlay_id: "cap:thinh_1", source: "remote", caption: { background: { colors: ["#141E30", "#243B55"] }, max_lines: 1, text: "Đăng cho cả thế giới, chờ mỗi cậu 👀", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:thinh_2", source: "remote", caption: { background: { colors: ["#FF512F", "#DD2476"] }, max_lines: 1, text: "Vô tình đăng, cố tình đợi 🤭", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:thinh_3", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FBC2EB"] }, max_lines: 1, text: "Không tag mà mong cậu tự nhận 😳", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:thinh_4", source: "remote", caption: { background: { colors: ["#A18CD1", "#FBC2EB"] }, max_lines: 1, text: "Người cần thấy thì chưa thấy 🥲", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:thinh_5", source: "remote", caption: { background: { colors: ["#FAD0C4", "#FFD1FF"] }, max_lines: 1, text: "Hint tới vậy rồi mà còn giả bộ 😭", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:thinh_6", source: "remote", caption: { background: { colors: ["#FFD1FF", "#FEE140"] }, max_lines: 1, text: "Không cần nhiều tim, cần tim của cậu ❤️", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:thinh_7", source: "remote", caption: { background: { colors: ["#FF0844", "#FFB199"] }, max_lines: 1, text: "Cậu có thấy đèn xanh mình bật chưa? 💚", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:thinh_8", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, max_lines: 1, text: "Thích cậu là chuyện nhỏ, giấu cậu mới khó 🤫", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:thinh_9", source: "remote", caption: { background: { colors: ["#C6FFDD", "#FBD786", "#F7797D"] }, max_lines: 1, text: "Có người khiến mình online chăm chỉ hơn 📱", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:thinh_10", source: "remote", caption: { background: { colors: ["#12C2E9", "#C471ED", "#F64F59"] }, max_lines: 1, text: "Cậu cười một cái, mình vui cả ngày ☀️", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:thinh_11", source: "remote", caption: { background: { colors: ["#00F2FE", "#4FACFE"] }, max_lines: 1, text: "Không nhắc tên, nhưng có người trong đầu 💭", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:thinh_12", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, max_lines: 1, text: "Chờ một thông báo hơi đặc biệt 📱", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:thinh_13", source: "remote", caption: { background: { colors: ["#232526", "#414345"] }, max_lines: 1, text: "Có người xem là đủ vui 💗", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:thinh_14", source: "remote", caption: { background: { colors: ["#8E2DE2", "#4A00E0"] }, max_lines: 1, text: "Không phải đăng cho cậu đâu… chắc vậy 🤭", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:thinh_15", source: "remote", caption: { background: { colors: ["#2C3E50", "#4CA1AF"] }, max_lines: 1, text: "Nếu cậu hiểu thì coi như mình chưa nói gì 🤫", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:thinh_16", source: "remote", caption: { background: { colors: ["#141E30", "#243B55"] }, max_lines: 1, text: "Thích thì nhích nha 🫣", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:thinh_17", source: "remote", caption: { background: { colors: ["#FF512F", "#DD2476"] }, max_lines: 1, text: "Cậu lướt qua nhớ để lại chút thương 💌", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:thinh_18", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FBC2EB"] }, max_lines: 1, text: "Ảnh này dành cho người đang đọc caption 💗", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:thinh_19", source: "remote", caption: { background: { colors: ["#A18CD1", "#FBC2EB"] }, max_lines: 1, text: "Tự nhiên muốn ai đó chú ý 👀", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:thinh_20", source: "remote", caption: { background: { colors: ["#FAD0C4", "#FFD1FF"] }, max_lines: 1, text: "Có một người khiến ngày bình thường khác đi 🌷", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:thinh_21", source: "remote", caption: { background: { colors: ["#FFD1FF", "#FEE140"] }, max_lines: 1, text: "Muốn rủ cậu đi ăn tối, nhưng sợ thành người yêu của cậu 🫣", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:thinh_22", source: "remote", caption: { background: { colors: ["#FF0844", "#FFB199"] }, max_lines: 1, text: "Gọi em là học sinh giỏi, vì lúc nào cũng thích anh 📚", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:thinh_23", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, max_lines: 1, text: "Có rất nhiều cách để hạnh phúc, cách nhanh nhất là gặp cậu 🌷", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:thinh_24", source: "remote", caption: { background: { colors: ["#C6FFDD", "#FBD786", "#F7797D"] }, max_lines: 1, text: "Bật chế độ chờ người thương 📶", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:thinh_25", source: "remote", caption: { background: { colors: ["#12C2E9", "#C471ED", "#F64F59"] }, max_lines: 1, text: "Mong cậu lướt qua đây và dừng lại ở em 💗", text_color: "#FFFFFFE6", type: "static_content" } }
                ]
            },
            {
                section: "🎨 😏 Châm Biếm, Cà Khịa Thấm",
                items: [
                    { overlay_id: "cap:khia_1", source: "remote", caption: { background: { colors: ["#00F2FE", "#4FACFE"] }, max_lines: 1, text: "Ai đọc thấy nhột thì tự gãi nha 🦟", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:khia_2", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, max_lines: 1, text: "Không nhắc tên, người có tật tự giật mình 🤭", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:khia_3", source: "remote", caption: { background: { colors: ["#232526", "#414345"] }, max_lines: 1, text: "Không đá xéo ai, đường hơi cong thôi 🛣️", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:khia_4", source: "remote", caption: { background: { colors: ["#8E2DE2", "#4A00E0"] }, max_lines: 1, text: "Caption vô tri, ai suy diễn tự chịu 🧠", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:khia_5", source: "remote", caption: { background: { colors: ["#2C3E50", "#4CA1AF"] }, max_lines: 1, text: "Mình đăng ảnh, ai tự ái thì tùy duyên 🪷", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:khia_6", source: "remote", caption: { background: { colors: ["#141E30", "#243B55"] }, max_lines: 1, text: "Đừng nhận vơ, mình chưa gọi tên ai 🫢", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:khia_7", source: "remote", caption: { background: { colors: ["#FF512F", "#DD2476"] }, max_lines: 1, text: "Nói chung chung mà có người thấy riêng mình 😌", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:khia_8", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FBC2EB"] }, max_lines: 1, text: "Locket bé thôi, nhưng đủ chỗ cho vài cú nhột 🐝", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:khia_9", source: "remote", caption: { background: { colors: ["#A18CD1", "#FBC2EB"] }, max_lines: 1, text: "Diễn sâu quá, thiếu mỗi giải Oscar 🏆", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:khia_10", source: "remote", caption: { background: { colors: ["#FAD0C4", "#FFD1FF"] }, max_lines: 1, text: "Nói chuyện đạo lý, hành xử đi vào lòng đất 🌚", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:khia_11", source: "remote", caption: { background: { colors: ["#FFD1FF", "#FEE140"] }, max_lines: 1, text: "Năng lực chưa thấy, thái độ thấy hơi nhiều 😏", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:khia_12", source: "remote", caption: { background: { colors: ["#FF0844", "#FFB199"] }, max_lines: 1, text: "Tưởng mình nhân vật chính, ai ngờ chỉ là cameo 🎬", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:khia_13", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, max_lines: 1, text: "Bớt thể hiện, tăng thực lực nha bạn 🫡", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:khia_14", source: "remote", caption: { background: { colors: ["#C6FFDD", "#FBD786", "#F7797D"] }, max_lines: 1, text: "Không phải cứ ồn ào là có giá trị 📢", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:khia_15", source: "remote", caption: { background: { colors: ["#12C2E9", "#C471ED", "#F64F59"] }, max_lines: 1, text: "Có thực lực thì không cần làm màu 🎨", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:khia_16", source: "remote", caption: { background: { colors: ["#00F2FE", "#4FACFE"] }, max_lines: 1, text: "Lời nói miễn phí nên ai cũng hào phóng 💬", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:khia_17", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, max_lines: 1, text: "Hứa thì hay, thực hiện thì mất sóng 📵", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:khia_18", source: "remote", caption: { background: { colors: ["#232526", "#414345"] }, max_lines: 1, text: "Người vô tâm thường nghĩ mình vô tội 🫠", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:khia_19", source: "remote", caption: { background: { colors: ["#8E2DE2", "#4A00E0"] }, max_lines: 1, text: "Đừng nói mình quan trọng khi chỉ nhớ đến lúc cần 🥱", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:khia_20", source: "remote", caption: { background: { colors: ["#2C3E50", "#4CA1AF"] }, max_lines: 1, text: "Đừng nhầm sự lịch sự với sự thân thiết 🙂", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:khia_21", source: "remote", caption: { background: { colors: ["#141E30", "#243B55"] }, max_lines: 1, text: "Không lạnh lùng, chỉ hết nhiệt tình sai chỗ 🥀", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:khia_22", source: "remote", caption: { background: { colors: ["#FF512F", "#DD2476"] }, max_lines: 1, text: "Không tranh giành, thứ gì phải giành thì thôi 🥂", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:khia_23", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FBC2EB"] }, max_lines: 1, text: "Không cần bóc phốt, thời gian tự mở nắp 🤫", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:khia_24", source: "remote", caption: { background: { colors: ["#A18CD1", "#FBC2EB"] }, max_lines: 1, text: "Trước mặt thân thiết, sau lưng thân ai nấy lo 🐍", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:khia_25", source: "remote", caption: { background: { colors: ["#FAD0C4", "#FFD1FF"] }, max_lines: 1, text: "Không phải ai im lặng cũng hiền, có khi người ta chán nói 🫠", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:khia_26", source: "remote", caption: { background: { colors: ["#FFD1FF", "#FEE140"] }, max_lines: 1, text: "Khẩu phật tâm xà, diễn xuất xứng đáng nhận giải 🎭", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:khia_27", source: "remote", caption: { background: { colors: ["#FF0844", "#FFB199"] }, max_lines: 1, text: "Bớt tạo nghiệp để kiếp sau còn làm người 🧘‍♀️", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:khia_28", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, max_lines: 1, text: "Nói lời dễ nghe thì khó, chứ làm chuyện khó nghe thì giỏi 🤫", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:khia_29", source: "remote", caption: { background: { colors: ["#C6FFDD", "#FBD786", "#F7797D"] }, max_lines: 1, text: "Nhà bao việc, không có thời gian quan tâm chuyện thiên hạ 🧹", text_color: "#FFFFFFE6", type: "static_content" } }
                ]
            },
            {
                section: "🎨 🖤 Ngầu, Lạnh Lùng",
                items: [
                    { overlay_id: "cap:ngau_1", source: "remote", caption: { background: { colors: ["#12C2E9", "#C471ED", "#F64F59"] }, max_lines: 1, text: "Ít nói, nhiều ảnh 🖤", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngau_2", source: "remote", caption: { background: { colors: ["#00F2FE", "#4FACFE"] }, max_lines: 1, text: "Không cần nổi bật, chỉ cần khác biệt 🕶️", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngau_3", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, max_lines: 1, text: "Ảnh thì công khai, tâm trạng thì riêng tư 🔒", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:ngau_4", source: "remote", caption: { background: { colors: ["#232526", "#414345"] }, max_lines: 1, text: "Không phải gu tất cả, vậy thôi 🥂", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:ngau_5", source: "remote", caption: { background: { colors: ["#8E2DE2", "#4A00E0"] }, max_lines: 1, text: "Không chạy theo ai, trừ deadline 🏃", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:ngau_6", source: "remote", caption: { background: { colors: ["#2C3E50", "#4CA1AF"] }, max_lines: 1, text: "Bình yên là một kiểu sang 🕊️", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:ngau_7", source: "remote", caption: { background: { colors: ["#141E30", "#243B55"] }, max_lines: 1, text: "Không hơn thua, chỉ hơn hôm qua 📈", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:ngau_8", source: "remote", caption: { background: { colors: ["#FF512F", "#DD2476"] }, max_lines: 1, text: "Không phải mình thay đổi, chỉ là hết tự lừa mình 🤍", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngau_9", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FBC2EB"] }, max_lines: 1, text: "Không cần chứng minh, người hiểu tự khắc hiểu 🌙", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngau_10", source: "remote", caption: { background: { colors: ["#A18CD1", "#FBC2EB"] }, max_lines: 1, text: "Không phải ai cũng xứng đáng với phiên bản tử tế của mình 🖤", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngau_11", source: "remote", caption: { background: { colors: ["#FAD0C4", "#FFD1FF"] }, max_lines: 1, text: "Mình không khó gần, chỉ không dễ thân 🧊", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngau_12", source: "remote", caption: { background: { colors: ["#FFD1FF", "#FEE140"] }, max_lines: 1, text: "Tôn trọng tất cả, tin tưởng có chọn lọc 🔐", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:ngau_13", source: "remote", caption: { background: { colors: ["#FF0844", "#FFB199"] }, max_lines: 1, text: "Không hoàn hảo, nhưng không bản sao ⚡", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:ngau_14", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, max_lines: 1, text: "Lựa chọn của tôi, cuộc đời của tôi ⚡", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngau_15", source: "remote", caption: { background: { colors: ["#C6FFDD", "#FBD786", "#F7797D"] }, max_lines: 1, text: "Không cạnh tranh, vì tôi ở vị trí khác 👑", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngau_16", source: "remote", caption: { background: { colors: ["#12C2E9", "#C471ED", "#F64F59"] }, max_lines: 1, text: "Đủ bản lĩnh thì bước vào, không thì đứng sang một bên 🧊", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngau_17", source: "remote", caption: { background: { colors: ["#00F2FE", "#4FACFE"] }, max_lines: 1, text: "Không cần ai duyệt, tự mình hài lòng là được 🔒", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngau_18", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, max_lines: 1, text: "Càng im lặng, càng đắt giá 🖤", text_color: "#000000E6", type: "static_content" } }
                ]
            },
            {
                section: "🎨 🥀 Tâm Trạng, Suy Nhẹ",
                items: [
                    { overlay_id: "cap:suy_1", source: "remote", caption: { background: { colors: ["#232526", "#414345"] }, max_lines: 1, text: "Hôm nay hơi im lặng một chút 🌧️", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:suy_2", source: "remote", caption: { background: { colors: ["#8E2DE2", "#4A00E0"] }, max_lines: 1, text: "Cười vậy thôi, chứ cũng bình thường 🙂", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:suy_3", source: "remote", caption: { background: { colors: ["#2C3E50", "#4CA1AF"] }, max_lines: 1, text: "Có những chuyện chỉ mình biết 🌙", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:suy_4", source: "remote", caption: { background: { colors: ["#141E30", "#243B55"] }, max_lines: 1, text: "Không sao, chỉ là hơi mệt 🍂", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:suy_5", source: "remote", caption: { background: { colors: ["#FF512F", "#DD2476"] }, max_lines: 1, text: "Trời vẫn đẹp, lòng thì chưa 🌧️", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:suy_6", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FBC2EB"] }, max_lines: 1, text: "Không buồn lắm, chỉ không vui 🫠", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:suy_7", source: "remote", caption: { background: { colors: ["#A18CD1", "#FBC2EB"] }, max_lines: 1, text: "Đôi khi nhớ một người chẳng có lý do 💭", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:suy_8", source: "remote", caption: { background: { colors: ["#FAD0C4", "#FFD1FF"] }, max_lines: 1, text: "Có những điều chẳng biết kể cùng ai 🌙", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:suy_9", source: "remote", caption: { background: { colors: ["#FFD1FF", "#FEE140"] }, max_lines: 1, text: "Hôm nay để trái tim nghỉ một chút 🩹", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:suy_10", source: "remote", caption: { background: { colors: ["#FF0844", "#FFB199"] }, max_lines: 1, text: "Một chút cô đơn giữa ngày bình thường 🌃", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:suy_11", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, max_lines: 1, text: "Mọi thứ rồi sẽ ổn, đúng không? 🫂", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:suy_12", source: "remote", caption: { background: { colors: ["#C6FFDD", "#FBD786", "#F7797D"] }, max_lines: 1, text: "Có những ngày bình yên đến lạ, lạ đến mức buồn 🌧️", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:suy_13", source: "remote", caption: { background: { colors: ["#12C2E9", "#C471ED", "#F64F59"] }, max_lines: 1, text: "Mọi thứ vẫn vậy, chỉ là cảm xúc đã khác 🍂", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:suy_14", source: "remote", caption: { background: { colors: ["#00F2FE", "#4FACFE"] }, max_lines: 1, text: "Đôi khi im lặng là cách tốt nhất để bảo vệ bản thân 🩹", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:suy_15", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, max_lines: 1, text: "Gió tầng nào gặp mây tầng đó, chắc mình chưa gặp đúng tầng ☁️", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:suy_16", source: "remote", caption: { background: { colors: ["#232526", "#414345"] }, max_lines: 1, text: "Dành cả thanh xuân để chữa lành cho những chuyện chưa bắt đầu 🕊️", text_color: "#FFFFFF", type: "static_content" } }
                ]
            },
            {
                section: "🎨 💔 Tình Cảm, Mỉa Mai",
                items: [
                    { overlay_id: "cap:tinh_1", source: "remote", caption: { background: { colors: ["#8E2DE2", "#4A00E0"] }, max_lines: 1, text: "Tình cảm không phải Wi-Fi, đừng lúc có lúc không 📶", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:tinh_2", source: "remote", caption: { background: { colors: ["#2C3E50", "#4CA1AF"] }, max_lines: 1, text: "Thích thì nhắn, đừng thích xong đi mất tích 👻", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:tinh_3", source: "remote", caption: { background: { colors: ["#141E30", "#243B55"] }, max_lines: 1, text: "Red flag không phải trang trí Giáng Sinh đâu nha 🚩", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:tinh_4", source: "remote", caption: { background: { colors: ["#FF512F", "#DD2476"] }, max_lines: 1, text: "Người cũ là bài học, đừng học lại lần hai 📚", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:tinh_5", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FBC2EB"] }, max_lines: 1, text: "Không sợ độc thân, chỉ sợ chọn nhầm người 🥲", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:tinh_6", source: "remote", caption: { background: { colors: ["#A18CD1", "#FBC2EB"] }, max_lines: 1, text: "Quan tâm lúc rảnh, biến mất lúc cần 👏", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:tinh_7", source: "remote", caption: { background: { colors: ["#FAD0C4", "#FFD1FF"] }, max_lines: 1, text: "Tin nhắn thì seen, cuộc đời thì diễn 📱", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:tinh_8", source: "remote", caption: { background: { colors: ["#FFD1FF", "#FEE140"] }, max_lines: 1, text: "Bận đến mức đăng story nhưng không trả lời được 😭", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:tinh_9", source: "remote", caption: { background: { colors: ["#FF0844", "#FFB199"] }, max_lines: 1, text: "Không cần giải thích, hành động có phụ đề rồi 🎬", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:tinh_10", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, max_lines: 1, text: "Em không cần lời hứa, em cần người giữ lời 🤡", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:tinh_11", source: "remote", caption: { background: { colors: ["#C6FFDD", "#FBD786", "#F7797D"] }, max_lines: 1, text: "Không thiếu người yêu, chỉ thiếu người yêu cho đàng hoàng 😌", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:tinh_12", source: "remote", caption: { background: { colors: ["#12C2E9", "#C471ED", "#F64F59"] }, max_lines: 1, text: "Sự im lặng đôi khi là câu trả lời tiết kiệm nhất 🤐", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:tinh_13", source: "remote", caption: { background: { colors: ["#00F2FE", "#4FACFE"] }, max_lines: 1, text: "Sự nhiệt tình của em đặt sai chỗ nên thành làm phiền 🤡", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:tinh_14", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, max_lines: 1, text: "Nói yêu thì dễ, kiên trì mới khó 👻", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:tinh_15", source: "remote", caption: { background: { colors: ["#232526", "#414345"] }, max_lines: 1, text: "Hẹn thề như gió thoảng, hứa lèo như mưa rào ☔", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:tinh_16", source: "remote", caption: { background: { colors: ["#8E2DE2", "#4A00E0"] }, max_lines: 1, text: "Đừng biến niềm tin của em thành trò đùa 🚩", text_color: "#FFFFFF", type: "static_content" } }
                ]
            },
            {
                section: "🎨 🐸 Bạn Bè, Cà Khịa Vui",
                items: [
                    { overlay_id: "cap:ban_1", source: "remote", caption: { background: { colors: ["#2C3E50", "#4CA1AF"] }, max_lines: 1, text: "Bạn tốt là người góp ý, bạn thân là người góp chuyện 🤣", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:ban_2", source: "remote", caption: { background: { colors: ["#141E30", "#243B55"] }, max_lines: 1, text: "Hội bạn chất lượng, mỗi đứa một vấn đề 🤡", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:ban_3", source: "remote", caption: { background: { colors: ["#FF512F", "#DD2476"] }, max_lines: 1, text: "Bạn thân là đứa biết hết bí mật nhưng vẫn chưa đi tố cáo 🤫", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ban_4", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FBC2EB"] }, max_lines: 1, text: "Không ai hoàn hảo, nhất là hội bạn của mình 🫠", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ban_5", source: "remote", caption: { background: { colors: ["#A18CD1", "#FBC2EB"] }, max_lines: 1, text: "Bạn bè là nghĩa tương thân, hết tiền thì mạnh ai nấy thân 💸", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ban_6", source: "remote", caption: { background: { colors: ["#FAD0C4", "#FFD1FF"] }, max_lines: 1, text: "Tình bạn bền vững nhờ những lần bao ăn 🍜", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ban_7", source: "remote", caption: { background: { colors: ["#FFD1FF", "#FEE140"] }, max_lines: 1, text: "Có nhau là có chuyện để cười 😂", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:ban_8", source: "remote", caption: { background: { colors: ["#FF0844", "#FFB199"] }, max_lines: 1, text: "Thanh xuân phiên bản hơi báo 🐆", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:ban_9", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, max_lines: 1, text: "Bạn bè ít thôi, drama nhiều quá mệt 📉", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ban_10", source: "remote", caption: { background: { colors: ["#C6FFDD", "#FBD786", "#F7797D"] }, max_lines: 1, text: "Bạn thân là đứa chỉ chờ mình hở ra là chụp ảnh dìm 📸", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ban_11", source: "remote", caption: { background: { colors: ["#12C2E9", "#C471ED", "#F64F59"] }, max_lines: 1, text: "Chơi thân bao năm, chưa thấy đứa nào bình thường 🤪", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ban_12", source: "remote", caption: { background: { colors: ["#00F2FE", "#4FACFE"] }, max_lines: 1, text: "Ăn chung mâm, báo chung hội 🐆", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ban_13", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, max_lines: 1, text: "Đang yên đang lành, tự nhiên có hội bạn bất ổn 🤡", text_color: "#000000E6", type: "static_content" } }
                ]
            },
            {
                section: "🎨 🌷 Chill, Nhẹ Nhàng",
                items: [
                    { overlay_id: "cap:chill_1", source: "remote", caption: { background: { colors: ["#232526", "#414345"] }, max_lines: 1, text: "Một chút nắng, một chút mình ☀️", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:chill_2", source: "remote", caption: { background: { colors: ["#8E2DE2", "#4A00E0"] }, max_lines: 1, text: "Ngày bình thường, cảm xúc xinh xinh 🌷", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:chill_3", source: "remote", caption: { background: { colors: ["#2C3E50", "#4CA1AF"] }, max_lines: 1, text: "Cứ chậm thôi, không cần vội 🕊️", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:chill_4", source: "remote", caption: { background: { colors: ["#141E30", "#243B55"] }, max_lines: 1, text: "Hôm nay chọn vui 🌈", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:chill_5", source: "remote", caption: { background: { colors: ["#FF512F", "#DD2476"] }, max_lines: 1, text: "Little things, little happiness ☁️", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:chill_6", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FBC2EB"] }, max_lines: 1, text: "Sống chậm, cười nhiều 🌻", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:chill_7", source: "remote", caption: { background: { colors: ["#A18CD1", "#FBC2EB"] }, max_lines: 1, text: "Giữ lại những điều khiến mình mỉm cười 🌼", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:chill_8", source: "remote", caption: { background: { colors: ["#FAD0C4", "#FFD1FF"] }, max_lines: 1, text: "Không cần hoàn hảo để hạnh phúc 🫶", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:chill_9", source: "remote", caption: { background: { colors: ["#FFD1FF", "#FEE140"] }, max_lines: 1, text: "Cứ là mình, theo cách dễ thương nhất 🎀", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:chill_10", source: "remote", caption: { background: { colors: ["#FF0844", "#FFB199"] }, max_lines: 1, text: "Nắng đẹp nên lưu lại 🌞", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:chill_11", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, max_lines: 1, text: "Những ngày bình thường đáng nhớ 🌻", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:chill_12", source: "remote", caption: { background: { colors: ["#C6FFDD", "#FBD786", "#F7797D"] }, max_lines: 1, text: "Thưởng thức từng khoảnh khắc nhỏ bé ✨", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:chill_13", source: "remote", caption: { background: { colors: ["#12C2E9", "#C471ED", "#F64F59"] }, max_lines: 1, text: "An yên giữa dòng đời vội vã 🍃", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:chill_14", source: "remote", caption: { background: { colors: ["#00F2FE", "#4FACFE"] }, max_lines: 1, text: "Nụ cười ươm mầm cho ngày mới 🌻", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:chill_15", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, max_lines: 1, text: "Thêm một chút xanh cho tâm hồn thanh thản 🌿", text_color: "#000000E6", type: "static_content" } }
                ]
            },
            {
                section: "🎨 ☕ Work, Study & Deadline",
                items: [
                    { overlay_id: "cap:work_1", source: "remote", caption: { background: { colors: ["#232526", "#414345"] }, max_lines: 1, text: "Deadline dí tụt quần vẫn phải chụp cái ảnh 💻", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:work_2", source: "remote", caption: { background: { colors: ["#8E2DE2", "#4A00E0"] }, max_lines: 1, text: "Học không vào nhưng ảnh lên sóng thì vào 📚", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:work_3", source: "remote", caption: { background: { colors: ["#2C3E50", "#4CA1AF"] }, max_lines: 1, text: "Lao động là vinh quang, nhưng nghỉ ngơi là hạnh phúc ☕", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:work_4", source: "remote", caption: { background: { colors: ["#141E30", "#243B55"] }, max_lines: 1, text: "Năng lượng làm việc 1%, năng lượng sống 99% 🪫", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:work_5", source: "remote", caption: { background: { colors: ["#FF512F", "#DD2476"] }, max_lines: 1, text: "Cần nạp cafein gấp để duy trì sự sống ☕", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:work_6", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FBC2EB"] }, max_lines: 1, text: "Bên ngoài vui vẻ, bên trong gánh deadline 🗂️", text_color: "#FFFFFFE6", type: "static_content" } }
                ]
            },
            {
                section: "🎨 🍕 Foodie & Chill Out",
                items: [
                    { overlay_id: "cap:food_1", source: "remote", caption: { background: { colors: ["#A18CD1", "#FBC2EB"] }, max_lines: 1, text: "Béo không phải là lỗi, béo là do đồ ăn quá ngon 🍜", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:food_2", source: "remote", caption: { background: { colors: ["#FAD0C4", "#FFD1FF"] }, max_lines: 1, text: "Tâm hồn ăn uống, cơ thể bất ổn 🍰", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:food_3", source: "remote", caption: { background: { colors: ["#FFD1FF", "#FEE140"] }, max_lines: 1, text: "Trời tròn đất vuông, bụng em tròn xoe 🧋", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:food_4", source: "remote", caption: { background: { colors: ["#FF0844", "#FFB199"] }, max_lines: 1, text: "Xách balo lên và đi... trốn 🧳", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:food_5", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, max_lines: 1, text: "Đi đu đưa đi 💃", text_color: "#FFFFFFE6", type: "static_content" } }
                ]
            },
            {
                section: "🎨 🤭 Caption Siêu Ngắn",
                items: [
                    { overlay_id: "cap:ngan_1", source: "remote", caption: { background: { colors: ["#C6FFDD", "#FBD786", "#F7797D"] }, max_lines: 1, text: "Nay hơi keo 😌", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngan_2", source: "remote", caption: { background: { colors: ["#12C2E9", "#C471ED", "#F64F59"] }, max_lines: 1, text: "Bé đây nè 🐣", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngan_3", source: "remote", caption: { background: { colors: ["#00F2FE", "#4FACFE"] }, max_lines: 1, text: "Ủa alo? 📞", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngan_4", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, max_lines: 1, text: "Ai thương hong? 🥺", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:ngan_5", source: "remote", caption: { background: { colors: ["#232526", "#414345"] }, max_lines: 1, text: "Vui là chính 🌈", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:ngan_6", source: "remote", caption: { background: { colors: ["#8E2DE2", "#4A00E0"] }, max_lines: 1, text: "Ảnh mới, người cũ 🫠", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:ngan_7", source: "remote", caption: { background: { colors: ["#2C3E50", "#4CA1AF"] }, max_lines: 1, text: "Xinh xỉu ngang 🎀", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:ngan_8", source: "remote", caption: { background: { colors: ["#141E30", "#243B55"] }, max_lines: 1, text: "Ổn áp phết 😎", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:ngan_9", source: "remote", caption: { background: { colors: ["#FF512F", "#DD2476"] }, max_lines: 1, text: "Chụp đại mà xinh 🤳", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngan_10", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FBC2EB"] }, max_lines: 1, text: "Tự nhiên đáng yêu 🐰", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngan_11", source: "remote", caption: { background: { colors: ["#A18CD1", "#FBC2EB"] }, max_lines: 1, text: "Tim đâu ta? ❤️", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngan_12", source: "remote", caption: { background: { colors: ["#FAD0C4", "#FFD1FF"] }, max_lines: 1, text: "Nhớ ai đó xíu 💭", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngan_13", source: "remote", caption: { background: { colors: ["#FFD1FF", "#FEE140"] }, max_lines: 1, text: "Nay không bình thường 🤡", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:ngan_14", source: "remote", caption: { background: { colors: ["#FF0844", "#FFB199"] }, max_lines: 1, text: "Một chiếc tui 🫶", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:ngan_15", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, max_lines: 1, text: "Hết cứu 😭", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngan_16", source: "remote", caption: { background: { colors: ["#C6FFDD", "#FBD786", "#F7797D"] }, max_lines: 1, text: "Cute phô mai que 🧀", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngan_17", source: "remote", caption: { background: { colors: ["#12C2E9", "#C471ED", "#F64F59"] }, max_lines: 1, text: "Mood hôm nay 🌷", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngan_18", source: "remote", caption: { background: { colors: ["#00F2FE", "#4FACFE"] }, max_lines: 1, text: "Hi, it's me 👋", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:ngan_19", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, max_lines: 1, text: "Chill thôi 🍃", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:ngan_20", source: "remote", caption: { background: { colors: ["#232526", "#414345"] }, max_lines: 1, text: "Slay quá 💅", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:ngan_21", source: "remote", caption: { background: { colors: ["#8E2DE2", "#4A00E0"] }, max_lines: 1, text: "Keo lì 🧲", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:ngan_22", source: "remote", caption: { background: { colors: ["#2C3E50", "#4CA1AF"] }, max_lines: 1, text: "Mê chưa? 🫣", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:ngan_23", source: "remote", caption: { background: { colors: ["#141E30", "#243B55"] }, max_lines: 1, text: "Bất ổn 🫠", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:ngan_24", source: "remote", caption: { background: { colors: ["#FF512F", "#DD2476"] }, max_lines: 1, text: "Overthinking 🧠", text_color: "#FFFFFFE6", type: "static_content" } }
                ]
            },
            {
                section: "🎨 👀 Cà Khịa Người Xem",
                items: [
                    { overlay_id: "cap:xem_1", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FBC2EB"] }, max_lines: 1, text: "Xem rồi thì thả tim, ngại gì ❤️", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:xem_2", source: "remote", caption: { background: { colors: ["#A18CD1", "#FBC2EB"] }, max_lines: 1, text: "Online mà không tương tác là sao? 👀", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:xem_3", source: "remote", caption: { background: { colors: ["#FAD0C4", "#FFD1FF"] }, max_lines: 1, text: "Thả tim miễn phí, đừng tiết kiệm 💸", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:xem_4", source: "remote", caption: { background: { colors: ["#FFD1FF", "#FEE140"] }, max_lines: 1, text: "Lướt nhanh vậy, sợ thích mình à? 🤭", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:xem_5", source: "remote", caption: { background: { colors: ["#FF0844", "#FFB199"] }, max_lines: 1, text: "Không thả tim là mình nhớ mặt đó 👁️", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "cap:xem_6", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, max_lines: 1, text: "Ảnh đẹp thế này mà im re? 😭", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:xem_7", source: "remote", caption: { background: { colors: ["#C6FFDD", "#FBD786", "#F7797D"] }, max_lines: 1, text: "Ai lướt qua nhớ chịu trách nhiệm 🫵", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:xem_8", source: "remote", caption: { background: { colors: ["#12C2E9", "#C471ED", "#F64F59"] }, max_lines: 1, text: "Đừng xem chùa, hãy yêu thương 🥹", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:xem_9", source: "remote", caption: { background: { colors: ["#00F2FE", "#4FACFE"] }, max_lines: 1, text: "Xem hoài mà không thấy mỏi mắt sao? 👀", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "cap:xem_10", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, max_lines: 1, text: "Lướt qua mà hông để lại tim là dỗi đó ❤️‍🔥", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "cap:xem_11", source: "remote", caption: { background: { colors: ["#232526", "#414345"] }, max_lines: 1, text: "Mắt nhìn ảnh, tay bấm tim nha 🫵", text_color: "#FFFFFF", type: "static_content" } }
                ]
            }
        ];

        customSections.unshift(defaultGeneral);

        Object.assign(obj.entries, {
            overlay_navigator_enabled: "true",
            overlays_v2_config: JSON.stringify({ suggestions_enabled: true, looks_enabled: true, ar_overlays_enabled: true }),
            captions_enabled: "true",
            music_caption_enabled: "true",
            music_caption_song_preview_enabled: "true",
            link_caption_link_enabled: "true",
            overlay_dynamic_captions: JSON.stringify([
                "standard", "poll", "color_palette", "review", "music", "location",
                "weather", "time", "streak", "star_sign", "party_time", "locket_count",
                "good_morning", "goodnight", "ootd", "miss_you", "custom", "phunu_2010", "halloween_2026"
            ]),
            overlay_items: JSON.stringify(customSections)
        });
    }

    $done({ body: JSON.stringify(obj) });
} else {
    $done({});
}
