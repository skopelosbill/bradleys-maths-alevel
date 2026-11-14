import os
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon

def generate_bradleys_maths_icon():
    # 1. Canvas setup: exact 1024x1024 square at 100 DPI
    fig = plt.figure(figsize=(10.24, 10.24), dpi=100)
    ax = fig.add_axes([0, 0, 1, 1])  # Full canvas without borders
    
    # Invert Y so (0, 0) is top-left, matching screen pixel coordinates
    ax.set_xlim(0, 1024)
    ax.set_ylim(1024, 0)
    ax.axis('off')
    
    bg_color = '#0F172A'       # Deep Oxford Slate
    axis_color = '#E2E8F0'     # Platinum white
    axis_label_color = '#F8FAFC'
    subtle_label_color = '#94A3B8'
    
    fig.patch.set_facecolor(bg_color)
    ax.set_facecolor(bg_color)

    # 2. Geometry parameters (centered strictly inside 680px safe circle)
    x_origin = 240
    y_origin = 512
    period_width = 540         # From x = 240 (0) to x = 780 (2pi)
    amplitude = 175            # Peak at y = 337, Trough at y = 687
    
    x_pi = x_origin + (period_width / 2)   # 510
    x_2pi = x_origin + period_width        # 780

    # 3. Draw Coordinate Axes
    # X-axis line & arrowhead
    x_start, x_end = 170, 855
    ax.plot([x_start, x_end], [y_origin, y_origin], color=axis_color, lw=3.5, zorder=2)
    x_arrow = Polygon([[x_end + 18, y_origin], [x_end - 6, y_origin - 10], [x_end - 6, y_origin + 10]], 
                      closed=True, facecolor=axis_color, edgecolor=axis_color, zorder=2)
    ax.add_patch(x_arrow)

    # Y-axis line & arrowhead
    y_start, y_end = 790, 205
    ax.plot([x_origin, x_origin], [y_start, y_end], color=axis_color, lw=3.5, zorder=2)
    y_arrow = Polygon([[x_origin, y_end - 18], [x_origin - 10, y_end + 6], [x_origin + 10, y_end + 6]], 
                      closed=True, facecolor=axis_color, edgecolor=axis_color, zorder=2)
    ax.add_patch(y_arrow)

    # Ticks on X-axis for pi and 2pi
    tick_half_len = 10
    ax.plot([x_pi, x_pi], [y_origin - tick_half_len, y_origin + tick_half_len], color=axis_color, lw=3, zorder=2)
    ax.plot([x_2pi, x_2pi], [y_origin - tick_half_len, y_origin + tick_half_len], color=axis_color, lw=3, zorder=2)

    # 4. Mathematical Axis Labels
    # Origin 'O'
    ax.text(x_origin - 22, y_origin + 36, r'$O$', fontsize=32, color=subtle_label_color, 
            ha='right', va='top', style='italic', family='sans-serif')
    
    # 'x' and 'y'
    ax.text(x_end + 32, y_origin - 4, r'$x$', fontsize=38, color=axis_label_color, 
            ha='left', va='center', style='italic', family='sans-serif')
    ax.text(x_origin - 2, y_end - 34, r'$y$', fontsize=38, color=axis_label_color, 
            ha='center', va='bottom', style='italic', family='sans-serif')

    # 'pi' and '2pi'
    ax.text(x_pi, y_origin + 34, r'$\pi$', fontsize=36, color=axis_label_color, 
            ha='center', va='top', family='sans-serif')
    ax.text(x_2pi, y_origin + 34, r'$2\pi$', fontsize=36, color=axis_label_color, 
            ha='center', va='top', family='sans-serif')

    # 5. Calculate Sine Wave Curves
    # Primary period [0, 2pi]
    x_core = np.linspace(x_origin, x_2pi, 400)
    theta_core = (x_core - x_origin) / period_width * 2 * np.pi
    y_core = y_origin - amplitude * np.sin(theta_core)

    # Left continuation tail [-0.5pi, 0]
    x_left = np.linspace(105, x_origin, 150)
    theta_left = (x_left - x_origin) / period_width * 2 * np.pi
    y_left = y_origin - amplitude * np.sin(theta_left)

    # Right continuation tail [2pi, 2.5pi]
    x_right = np.linspace(x_2pi, 915, 150)
    theta_right = (x_right - x_origin) / period_width * 2 * np.pi
    y_right = y_origin - amplitude * np.sin(theta_right)

    # 6. Render Continuation Tails (Dashed gold glow)
    for tail_x, tail_y in [(x_left, y_left), (x_right, y_right)]:
        ax.plot(tail_x, tail_y, color='#B45309', lw=14, alpha=0.25, linestyle='--', dashes=(4, 4), zorder=3)
        ax.plot(tail_x, tail_y, color='#F59E0B', lw=6, alpha=0.55, linestyle='--', dashes=(4, 4), zorder=4)
        ax.plot(tail_x, tail_y, color='#FDE68A', lw=2.5, alpha=0.85, linestyle='--', dashes=(4, 4), zorder=5)

    # 7. Render Primary 24K Gold Sine Curve [0, 2pi] (Multi-Layer Neon Aura)
    glow_layers = [
        {'color': '#B45309', 'lw': 28, 'alpha': 0.18},  # Deep ambient aura
        {'color': '#D97706', 'lw': 18, 'alpha': 0.32},  # Mid amber bloom
        {'color': '#F59E0B', 'lw': 10, 'alpha': 0.65},  # Bright neon glow
        {'color': '#FBBF24', 'lw': 6.0, 'alpha': 0.95}, # Rich 24K gold body
        {'color': '#FFFBEB', 'lw': 2.0, 'alpha': 0.95}, # Crisp specular core
    ]
    for layer in glow_layers:
        ax.plot(x_core, y_core, color=layer['color'], lw=layer['lw'], 
                alpha=layer['alpha'], solid_capstyle='round', zorder=6)

    # 8. Save output
    output_dir = os.path.join('assets', 'icon')
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, 'app_icon.png')
    
    plt.savefig(output_path, dpi=100, facecolor=bg_color, pad_inches=0)
    plt.close()
    print(f" Bradley's Maths 1024x1024 Master Icon generated successfully at: {output_path}")

if __name__ == '__main__':
    generate_bradleys_maths_icon()